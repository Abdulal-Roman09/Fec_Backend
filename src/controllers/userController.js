import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, profileImage, password } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email required" });
    }

    let user = await User.findOne({ email });
    // if (user) {
    //   return res.status(409).json({ message: "User already exists", user });
    // }

    user = new User({
      name,
      email,
      profileImage:
        profileImage ||
        "https://i.ibb.co.com/pv7TymVd/User-Avatar-Profile-Clip-Art-Transparent-File.png",
      password: password || undefined,
      lastLogin: new Date(),
    });

    await user.save();
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    console.error("Backend error:", error);
    res.status(500).json({ message: error.message });
  }
};

// GET ALL USERS
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// GET A SINGLE USER

export const singleUser = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUserData = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Profile updated", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getRoleByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email }).select("_id name email role");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
