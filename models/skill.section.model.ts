import { Schema, model, Document } from "mongoose";

export interface ISkillSection {
  name: string;
  slug: string;
  order: number;
}

export interface ISkillSectionDocument extends ISkillSection, Document {}

const skillSectionSchema = new Schema<ISkillSectionDocument>(
  {
    name: { type: String, required: true, trim: true, unique: true },
    slug: { type: String, required: true, lowercase: true, unique: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const SkillSection = model<ISkillSectionDocument>(
  "SkillSection",
  skillSectionSchema,
);
