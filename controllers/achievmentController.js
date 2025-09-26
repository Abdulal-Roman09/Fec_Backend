import Achievement from "../models/Achivement.js";

// Create Achievement
export const createAchievement = async (req, res) => {
  try {
    const { clubId } = req.params;
    const { title, year, description, eventLocation, eventName } = req.body;

    if (!clubId || !title) {
      return res.status(400).json({ message: "clubId and title are required" });
    }

    // Check duplicate
    const exist = await Achievement.findOne({ clubId, title });
    if (exist) {
      return res
        .status(400)
        .json({ message: "This achievement already exists" });
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
    return res.status(500).json({ message: error.message });
  }
};

// Get All Achievements / Club-specific
export const allAchivements = async (req, res) => {
  try {
    const { clubId } = req.params;

    const query = clubId ? { clubId } : {};

    const achievements = await Achievement.find(query)
      .populate("clubId", "name description")
      .sort({ updatedAt: -1 });

    res.status(200).json({
      message: "Achievements fetched successfully",
      data: achievements,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete Achievement
export const deleteAchievement = async (req, res) => {
  try {
    const { clubId, achievementId } = req.params;

    const achievement = await Achievement.findOneAndDelete({
      _id: achievementId,
      clubId,
    });

    if (!achievement) {
      return res
        .status(404)
        .json({ message: "Achievement not found for this club" });
    }

    res.status(200).json({
      message: "Achievement deleted successfully",
      data: achievement,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update Achievement
export const updateAchievement = async (req, res) => {
  try {
    const { clubId, achievementId } = req.params;
    const updated = await Achievement.findOneAndUpdate(
      { _id: achievementId, clubId },
      { $set: req.body },
      { new: true }
    );
    if (!updated)
      return res
        .status(404)
        .json({ message: "Achievement not found for this club" });
    res
      .status(200)
      .json({ message: "Achievement updated successfully", data: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
