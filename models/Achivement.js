import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema(
  {
    clubId: { type: mongoose.Types.ObjectId, ref: "Club", required: true },
    title: { type: String, required: true },
    year: { type: Number },
    description: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Achievement", AchievementSchema);
