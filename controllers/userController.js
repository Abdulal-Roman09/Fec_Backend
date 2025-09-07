import User from "../models/User.js";

// CREATE USER
export const createUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      profileImage,
      role,
      year,
      semester,
      registerNumber,
      hallName,
      phone,
      linkedin,
      github,
      facebook,
      session,
      homeTown,
    } = req.body;

    // Check existing user
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
      profileImage: profileImage || "/default-avatar.png",
      role: role || "Student",
      year,
      semester,
      registerNumber,
      hallName,
      phone,
      linkedin,
      github,
      facebook,
      session,
      homeTown,
    });

    await newUser.save();

    res.status(201).json({ message: "User created", user: newUser });
  } catch (error) {
    return res.status(500).json({ message: error.message });
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

export const singelUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).lean();

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
    const user = await User.findOne({ email }).select("role name email");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ email: user.email, name: user.name, role: user.role });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
