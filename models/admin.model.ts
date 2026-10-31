import { Schema, model, models, InferSchemaType } from "mongoose";

const AdminSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, required: true, select: false },
    role: { type: String, enum: ["admin", "superadmin"], default: "admin" },
    failedAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date },
  },
  { timestamps: true },
);

export type AdminDoc = InferSchemaType<typeof AdminSchema>;
export const Admin = models.Admin || model("Admin", AdminSchema);
