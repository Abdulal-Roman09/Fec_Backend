import { z } from "zod";

export const AddressSchema = z.object({
  district: z.string().optional().default(""),
  zela: z.string().optional().default(""),
  upzela: z.string().optional().default(""),
  roadname: z.string().optional().default(""),
});

export const EmergencyContactSchema = z.object({
  name: z.string().optional().default(""),
  relationship: z.string().optional().default(""),
  phone: z.string().optional().default(""),
});

// Main User Validation Schema
export const UserCreateSchema = z.object({
  // ----------------------------
  // Basic Information
  // ----------------------------
  name: z.string({ required_error: "Name is required" }).min(2),
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email format"),
  password: z.string().optional(),
  profileImage: z.string().url().optional().default("/default-avatar.png"),
  role: z
    .enum(["Student", "ClubMember", "CR", "Admin", "SuperAdmin"])
    .default("Student"),

  // ----------------------------
  // Activity & Status
  // ----------------------------
  lastLogin: z.date().optional(),
  isActive: z.boolean().optional().default(true),
  status: z.enum(["active", "suspended", "deleted"]).default("active"),

  // ----------------------------
  // Personal Information
  // ----------------------------
  gender: z.enum(["male", "female"]).optional(),
  bio: z.string().optional().default(""),
  dateOfBirth: z.string().optional(),
  phone: z.string().optional().default(""),
  languages: z.array(z.string()).optional().default([]),

  // ----------------------------
  // Academic Information
  // ----------------------------
  session: z.string().optional().default(""),
  year: z.string().optional().default(""),
  department: z.string().optional().default(""),
  registerNumber: z.string().optional().default(""),
  semester: z.string().optional().default(""),
  campusJoinDate: z.string().optional().default(""),
  hallName: z.string().optional().default(""),

  // ----------------------------
  // Address
  // ----------------------------
  address: AddressSchema.optional(),

  // ----------------------------
  // Clubs & Achievements
  // ----------------------------
  clubs: z.array(z.string()).optional().default([]),
  achievements: z.array(z.string()).optional().default([]),

  // ----------------------------
  // Social
  // ----------------------------
  facebook: z.string().optional().default(""),

  // ----------------------------
  // Emergency Contact
  // ----------------------------
  emergencyContact: EmergencyContactSchema.optional(),
});

// For updating an existing user (PATCH)
export const UserUpdateSchema = UserCreateSchema.partial();

// Type inference (for TypeScript)
export type UserCreateDTO = z.infer<typeof UserCreateSchema>;
export type UserUpdateDTO = z.infer<typeof UserUpdateSchema>;
