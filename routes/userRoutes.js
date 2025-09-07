import express from "express";
import {
  createUser,
  getAllUser,
  singelUser,
  updateUserData,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/add-user", createUser);
router.get("/all-users", getAllUser);
router.get("/user/:id", singelUser);
router.put("/user/:id", updateUserData);

export default router;
