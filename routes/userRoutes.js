import express from "express";
import { createUser, getAllUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/add-user",createUser);
router.get("/all-users",getAllUser);

export default router;
