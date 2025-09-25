import Achievement from "../models/Achivement.js";

export const createAchievement = async (req, res) => {
  try {
    const { clubId } = req.params;
    const { title, year, description, eventLocation, eventName } = req.body;

    if (!clubId || !title) {
      return res.status(400).json({ message: "clubId and title are required" });
    }

    const newAchievement = await Achievement.create({
      clubId,
      title,
      year,
      description,
      eventLocation,
      eventName,
    });

    res.status(201).json({
      message: "Achievement created successfully",
      data: newAchievement,
    });
  } catch (error) {
    console.error("Error in createAchievement:", error);
    return res.status(500).json({ message: error.message });
  }
};
