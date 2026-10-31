import dns from "node:dns";
import mongoose from "mongoose";

if (process.env.NODE_ENV === "development") {
  dns.setServers(["1.1.1.1", "8.8.8.8"]);
}

const uri = process.env.MONGODB_URI!;
const g = globalThis as unknown as { _mongoose?: Promise<typeof mongoose> };

export function connectDB() {
  return (g._mongoose ??= mongoose.connect(uri));
}
