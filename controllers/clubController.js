import Club from "../models/Club.js";

export const createClub = async (req, res) => {
  try {
    const club = await Club.create(req.body);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
