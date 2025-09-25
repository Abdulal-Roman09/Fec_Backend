import express from "express";
import { createAchievement } from "../controllers/achievmentController.js";

const router = express.Router();

router.post("/add-achievements", createAchievement);


export default router;
