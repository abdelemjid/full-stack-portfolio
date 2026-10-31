import { Schema, model, Document, Types } from "mongoose";

export interface ISkill {
  name: string;
  section: Types.ObjectId;
  progress?: number;
}

export interface ISkillDocument extends ISkill, Document {}

const skillSchema = new Schema<ISkillDocument>(
  {
    name: { type: String, required: true, trim: true },
    section: {
      type: Schema.Types.ObjectId,
      ref: "SkillSection",
      required: true,
      index: true,
    },
    progress: { type: Number, min: 0, max: 100 },
  },
  { timestamps: true },
);

skillSchema.index({ name: 1, section: 1 }, { unique: true });

export const Skill = model<ISkillDocument>("Skill", skillSchema);
