import mongoose from "mongoose";

const ClubSchema = new mongoose.Schema(
  {
    clubName: { type: String, required: true, unique: true },
    clubSortName: { type: String, required: true },
    clubLogo: { type: String },
    clubBanner: { type: String },
    clubMotto: { type: String },
    clubDescription: { type: String },
    clubCategory: {
      type: String,
      required: true,
      enum: [
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
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Club", ClubSchema);
