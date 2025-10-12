import express from "express";
import {
  createUser,
  getAllUser,
  getRoleByEmail,
  singleUser,
  updateUserData,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/add-user", createUser);
router.get("/all-users", getAllUser);
router.get("/user/:email", singleUser);
router.get("/user-role/:email", getRoleByEmail);
router.put("/user/:id", updateUserData);

export default router;
