import mongoose from "mongoose";

const BannerCarouselSchema = new mongoose.Schema(
  {
    clubName: { type: String, required: true },
    eventTitle: { type: String, required: true },
    eventCategory: {
      type: String,
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
      default: "Other",
    },
    image: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["Running", "Upcoming", "Expired"],
      default: "Upcoming",
    },
    date: { type: Date, required: true },
    eventTime: { type: String, required: true },
    registerStartDate: { type: Date, required: true },
    registerEndDate: { type: Date, required: true },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Carousel", BannerCarouselSchema);
