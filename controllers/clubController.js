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
export const getSingleClubs = async (req, res) => {
  try {
    const { id } = req.params;
    const clubs = await Club.findById(id);
    if (!clubs) {
      return res.status(404).json({ message: "club is not found" });
    }
    return res.status(200).json({
      success: true,
      data: clubs,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
