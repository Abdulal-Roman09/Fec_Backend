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
    image: { type: String },
    email: { type: String },
    phone: { type: String },
    // social
    facebookLink: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Committee = mongoose.model("Committee", CommitteeSchema);

export default Committee;
