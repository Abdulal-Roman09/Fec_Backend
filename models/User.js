import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    // ----------------------------
    // Basic Information
    // ----------------------------
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String },
    profileImage: { type: String, default: "/default-avatar.png" },
    role: {
      type: String,
      enum: ["Student", "ClubMember", "CR", "Admin", "SuperAdmin"],
      default: "Student",
    },

    // ----------------------------
    // Activity & Status
    // ----------------------------
    lastLogin: { type: Date },
    isActive: { type: Boolean, default: true },
    status: {
      type: String,
      enum: ["active", "suspended", "deleted"],
      default: "active",
    },

    // ----------------------------
    // Personal Information
    // ----------------------------
    gender: { type: String, enum: ["male", "female"] },
    bio: { type: String, default: "" },
    dateOfBirth: { type: Date },
    phone: { type: String, default: "" },
    languages: { type: [String], default: [] },
    // ----------------------------
    // Academic Information
    // ----------------------------
    session: { type: String, default: "" },
    year: { type: String, default: "" },
    department: { type: String, default: "" },
    registerNumber: { type: String, default: "" },
    semester: { type: String, default: "" },
    campusJoinDate: { type: String, default: "" },
    hallName: { type: String, default: "" },

    // ----------------------------
    // Address
    // ----------------------------
    address: {
      district: { type: String, default: "" },
      zela: { type: String, default: "" },
      upzela: { type: String, default: "" },
      roadname: { type: String, default: "" },
    },

    // ----------------------------
    // Clubs & Achievements
    // ----------------------------
    clubs: { type: [String], default: [] },
    achievements: { type: [String], default: [] },

    // ----------------------------
    // Social
    // ----------------------------
    facebook: { type: String, default: "" },

    // ----------------------------
    // Emergency Contact
    // ----------------------------
    emergencyContact: {
      name: { type: String, default: "" },
      relationship: { type: String, default: "" },
      phone: { type: String, default: "" },
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", UserSchema);
