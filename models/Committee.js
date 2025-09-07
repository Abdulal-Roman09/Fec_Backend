import mongoose from "mongoose";

const CommitteeSchema = new mongoose.Schema(
  {
    clubId: { type: mongoose.Types.ObjectId, ref: "Club", required: true },
    name: { type: String, required: true },
    role: {
      type: String,
      enum: [
        "President",
        "Vice President",
        "General Secretary",
        "Joint Secretary",
        "Treasurer",
        "Member",
        "Advisor",
        "Coordinator",
        "Other",
      ],
      default: "Member",
    },
    email: { type: String },
    phone: { type: String },
  },
  { timestamps: true, versionKey: false }
);