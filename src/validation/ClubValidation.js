import { z } from "zod";

// ----------------------
// Create Club Schema
// ----------------------
export const ClubCreateSchema = z.object({
  clubName: z
    .string({ required_error: "Club name is required" })
    .min(2, "Club name must be at least 2 characters"),
  clubSortName: z
    .string({ required_error: "Short name is required" })
    .min(1, "Short name cannot be empty"),

  clubLogo: z.string().optional(),
  clubBanner: z.string().optional(),
  clubMotto: z.string().optional(),
  clubDescription: z.string().optional(),

  clubCategory: z.enum(
    [
      "Innovation",
      "Technology",
      "Arts",
      "Religious",
      "Community",
      "Sports",
      "Creative",
      "Academic",
      "Cultural",
      "Professional",
      "Education",
    ],
    {
      required_error: "Club category is required",
      invalid_type_error: "Invalid category",
    }
  ),
});

// ----------------------
// Update Club Schema
// ----------------------
export const ClubUpdateSchema = ClubCreateSchema.partial();
