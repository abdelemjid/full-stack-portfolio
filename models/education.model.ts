import { Document, Schema, model } from "mongoose";

export interface EducationPeriod {
  from: Date;
  to: Date;
}

export interface IEducation {
  institution: string;
  matter: string;
  phase: string;
  period: EducationPeriod;
  description: string;
  highlights: string[];
}

export interface IEducationDocument extends IEducation, Document {}

const schema = new Schema<IEducationDocument>(
  {
    institution: { type: String, required: true, trim: true },
    matter: { type: String, required: true, trim: true },
    phase: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    highlights: { type: [String], required: true },
    period: {
      from: { type: Date, required: true },
      to: { type: Date, required: true },
    },
  },
  { timestamps: true },
);

export const Education = model<IEducationDocument>("Education", schema);
