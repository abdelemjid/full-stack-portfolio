import { Schema, Document, model } from "mongoose";

export const PROJECT_STATUS = ["live", "unlive", "coming-soon"] as const;
export type ProjectStatus = (typeof PROJECT_STATUS)[number];

export interface IProject {
  title: string;
  status: ProjectStatus;
  link?: string;
  githubLink?: string;
  language: string;
  image: string;
  technologies: string[];
}

export interface IProjectDocument extends IProject, Document {}

const schema = new Schema<IProjectDocument>(
  {
    title: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: PROJECT_STATUS,
      default: "live",
      required: true,
    },
  },
  { timestamps: true },
);

export const Project = model<IProjectDocument>("Project", schema);
