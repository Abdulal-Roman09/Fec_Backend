import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 },
    clubId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    visibility: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);
