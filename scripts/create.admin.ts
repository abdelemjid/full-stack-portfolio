import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import { connectDB } from "@/lib/db";
import { Admin } from "@/models/admin.model";
import argon2 from "argon2";

(async () => {
  await connectDB();
  const [email, password] = [
    process.env.ADMIN_EMAIL!,
    process.env.ADMIN_PASSWORD!,
  ];
  if (password.length < 8) throw new Error("Use a password of 8+ chars");
  await Admin.create({ email, passwordHash: await argon2.hash(password) });
  console.log("Admin created");
  process.exit(0);
})();
