import mongoose from "mongoose";

const CommitteeSchema = new mongoose.Schema(
  {
    clubId: { type: mongoose.Types.ObjectId, ref: "Club", required: true },
    name: { type: String, required: true },
    role: {
      type: String,
      enum: [
        // fecsa
        "FECSA ELITE",
        // Steering Committee / Core Executive
        "President",
        "Vice-President",
        "General Secretary",
        "Joint Secretary",
        "Organizing Secretary",
        "Joint Organizing Secretary",

        // Advisory Committee
        "Chief Advisor",
        "Honorary Advisors",
        "Advisors",

        // Financial Roles
        "Treasurer",
        "Deputy Treasurer",
        "Treasure Secretary",

        // Secretariat / Office Roles
        "Secretary",
        "Office Secretary",
        "Joint Office Secretary",

        // Specialized Roles (R&IC & FECDF)
        "Science, Technology & Research Affairs Secretary",
        "Joint Science, Technology & Research Affairs Secretary",
        "Press & Publicity Affairs Secretary",
        "Joint Press & Publicity Affairs Secretary",
        "Press & Publication Secretary",
        "Debate & Workshop Secretary",
        "Information & Research",

        // General / Catch-all (from your last input)
        "Coordinator",
        "Member",
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
