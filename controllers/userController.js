import User from "../models/User.js";

// CREATE USER
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "Email is already exist" });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    const userResponse = { ...newUser._doc };

    res.status(201).json({ message: "User created", user: userResponse });
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

