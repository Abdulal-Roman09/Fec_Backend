import Committee from "../models/Committee.js";

export const addCommittee = async (req, res) => {
  try {
    const clubId = req.params.id;
    const { name, role, image, email, phone, facebookLink } = req.body;

    // Validation
    if (!clubId || !name) {
      return res.status(400).json({ message: "clubId and name are required" });
    }

    // Check if member already exists in this club by name
    const userExist = await Committee.findOne({ clubId, name });
    if (userExist) {
      return res
        .status(400)
        .json({ message: "This member already exists in this club by name " });
    }
    // Check if member already exists in this club by facebook
    const userExistbyFacebook = await Committee.findOne({
      clubId,
      facebookLink,
    });
    if (userExistbyFacebook) {
      return res.status(400).json({
        message: "This member already exists in this club by facebook",
      });
    }

    // Create new committee member
    const newMember = new Committee({
      clubId,
      name,
      role: role || "Member",
      image,
      email,
      phone,
      facebookLink,
    });

    await newMember.save();

    // Success response
    res.status(201).json({
      message: "Committee member created successfully",
      data: newMember,
    });
  } catch (error) {
    console.error("Error in addCommittee:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const getFullCommitteeClub = async (req, res) => {
  try {
    const clubId = req.params.id;
    if (!clubId) {
      return res.status(400).json({ message: "clubId is required" });
    }

    // Find all committee members of this club
    const committee = await Committee.find({ clubId }).populate(
      "clubId",
      "name logo"
    );

    return res.status(200).json({
      message: "All committee members retrieved successfully",
      data: committee,
    });
  } catch (error) {
    console.error("Error in getFullCommitteeClub:", error);
    res.status(500).json({ message: "Server error" });
  }
};
