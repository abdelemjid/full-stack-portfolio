import { Document, Schema, Types, model } from "mongoose";

export interface IMessage {
  message: string;
}

export interface IMessageDocument extends IMessage, Document {}

const messageSchema = new Schema<IMessageDocument>(
  {
    message: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

export interface IContact {
  fullname: string;
  email: string;
  messages: Types.DocumentArray<IMessageDocument>;
}

export interface IContactDocument extends IContact, Document {}

const contactSchema = new Schema<IContactDocument>(
  {
    fullname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    messages: { type: [messageSchema], default: [] },
  },
  { timestamps: true },
);

export const Contact = model<IContactDocument>("Contact", contactSchema);
