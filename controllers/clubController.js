import Club from "../models/Club.js";

export const createClub = async (req, res) => {
  try {
    const club = await Club.create(req.body);
    res.status(201).json(club);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllclubs = async (req, res) => {
  try {
    const clubs = await Club.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "Clubs fetched successfully", clubs });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
