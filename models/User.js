import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profileImage: { type: String, default: "/default-avatar.png" },
    role: {
      type: String,
      enum: ["Student", "ClubMember", "CR", "Admin", "SuperAdmin"],
      default: "Student",
    },
    session: { type: String },
    year: { type: String },
    registerNumber: { type: String },
    semester: { type: String },
    homeTown: { type: String },
    hallName: { type: String },
    linkedin: { type: String },
    github: { type: String },
    facebook: { type: String },
    phone: { type: String },
  },
  { timestamps: true } 
);

export default mongoose.model("User", UserSchema);
