import { Schema, model, models } from "mongoose";

const SessionSchema = new Schema(
  {
    tokenHash: { type: String, required: true, unique: true },
    adminId: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
      index: true,
    },
    expiresAt: { type: Date, required: true, index: { expires: 0 } },
    userAgent: String,
    ip: String,
  },
  { timestamps: true },
);

export const Session = models.Session || model("Session", SessionSchema);
