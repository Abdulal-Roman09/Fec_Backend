import express from "express";
import {
  createUser,
  getAllUser,
  singelUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/add-user", createUser);
router.get("/all-users", getAllUser);
router.get("/user/:id", singelUser);

export default router;
