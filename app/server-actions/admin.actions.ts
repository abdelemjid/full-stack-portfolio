"use server";

import argon2 from "argon2";
import { z } from "zod";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { connectDB } from "@/lib/db";
import { createSession, destroySession } from "@/lib/auth";
import { Admin } from "@/models/admin.model";

const schema = z.object({
  email: z.email(),
  password: z.string().min(1).max(200),
});
const GENERIC = { error: "Invalid email or password" };
const MAX_ATTEMPTS = 5;
const LOCK_MS = 15 * 60 * 1000;

export async function login(_: unknown, formData: FormData) {
  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return GENERIC;

  await connectDB();
  const admin = await Admin.findOne({
    email: parsed.data.email.toLowerCase(),
  }).select("+passwordHash");

  if (admin?.lockUntil && admin.lockUntil > new Date())
    return { error: "Too many attempts. Try later." };

  // Hash a dummy when user doesn't exist to equalize timing
  const hash =
    admin?.passwordHash ??
    "$argon2id$v=19$m=65536,t=3,p=4$c29tZXNhbHRzb21l$RdescudvJCsgt3ub+b+dWRWJTmaaJObG+8mYSAsKuDo";
  const ok = await argon2.verify(hash, parsed.data.password).catch(() => false);

  if (!admin || !ok) {
    if (admin) {
      admin.failedAttempts += 1;
      if (admin.failedAttempts >= MAX_ATTEMPTS) {
        admin.lockUntil = new Date(Date.now() + LOCK_MS);
        admin.failedAttempts = 0;
      }
      await admin.save();
    }
    return GENERIC;
  }

  admin.failedAttempts = 0;
  admin.lockUntil = undefined;
  await admin.save();

  const h = await headers();
  await createSession(String(admin._id), {
    ip: h.get("x-forwarded-for")?.split(",")[0],
    ua: h.get("user-agent") ?? undefined,
  });
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin/login");
}
