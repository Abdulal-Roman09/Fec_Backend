import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema(
  {
    clubId: { type: mongoose.Types.ObjectId, ref: "Club", required: true },
    title: { type: String, required: true },
    year: { type: Number },
    date: { type: Date }, 
    description: { type: String },
    eventLocation: { type: String },
    eventName: { type: String },
    image: { type: String, required: true },
    award: { type: String },
    result: { type: String },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Achievement", AchievementSchema);
