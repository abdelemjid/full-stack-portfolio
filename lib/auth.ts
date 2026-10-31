import "server-only";
import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { connectDB } from "./db";
import { Session } from "@/models/session.model";
import { Admin } from "@/models/admin.model";
import { connection } from "next/server";

const COOKIE = "admin_session";
const TTL_MS = 8 * 60 * 60 * 1000; // 8h
const sha256 = (s: string) =>
  crypto.createHash("sha256").update(s).digest("hex");

export async function createSession(
  adminId: string,
  meta: { ip?: string; ua?: string },
) {
  await connectDB();
  const token = crypto.randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + TTL_MS);
  await Session.create({
    tokenHash: sha256(token),
    adminId,
    expiresAt,
    ip: meta.ip,
    userAgent: meta.ua,
  });

  (await cookies()).set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });
}

// cache() = one DB hit per request even if called many times
export const getAdmin = cache(async () => {
  await connection();

  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  await connectDB();
  const session = await Session.findOne({
    tokenHash: sha256(token),
    expiresAt: { $gt: new Date() },
  });
  if (!session) return null;
  const admin = await Admin.findById(session.adminId).lean();
  return admin
    ? { id: String(admin._id), email: admin.email, role: admin.role }
    : null;
});

export async function requireAdmin() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/login");
  return admin;
}

export async function destroySession() {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (token) {
    await connectDB();
    await Session.deleteOne({ tokenHash: sha256(token) });
  }
  jar.delete(COOKIE);
}
