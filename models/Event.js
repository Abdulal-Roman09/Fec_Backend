import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    clubId: { type: mongoose.Types.ObjectId, ref: "Club", required: true },
    title: { type: String, required: true },
    banner: { type: String },
    description: { type: String },
    date: { type: Date },
    location: { type: String },
    speaker: { type: String },
    organizer: { type: String },
    registerLink: { type: String },
    registerDeadline: { type: Date },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Event", EventSchema);
