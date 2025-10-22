import { z } from "zod";
import mongoose from "mongoose";

// Custom ObjectId validation
const objectId = z
  .string()
  .refine((val) => mongoose.Types.ObjectId.isValid(val), {
    message: "Invalid ObjectId",
  });

// Event Create Schema
export const EventCreateSchema = z.object({
  clubId: objectId,
  title: z.string({ required_error: "Title is required" }),
  banner: z.string().optional(),
  description: z.string().optional(),
  date: z.coerce.date().optional(),
  location: z.string().optional(),
  speaker: z.string().optional(),
  organizerClub: z.string().optional(),
  registerLink: z.string().url().optional(),
  registerDeadline: z.coerce.date().optional(),
});
