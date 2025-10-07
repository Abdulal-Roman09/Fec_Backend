import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String },
    profileImage: { type: String, default: "/default-avatar.png" },
    role: {
      type: String,
      enum: ["Student", "ClubMember", "CR", "Admin", "SuperAdmin"],
      default: "Student",
    },
    // Optional fields, default empty string
    session: { type: String, default: "" },
    year: { type: String, default: "" },
    registerNumber: { type: String, default: "" },
    semester: { type: String, default: "" },
    homeTown: { type: String, default: "" },
    hallName: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    github: { type: String, default: "" },
    facebook: { type: String, default: "" },
    phone: { type: String, default: "" },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", UserSchema);
