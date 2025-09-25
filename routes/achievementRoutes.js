import express from "express";
import { createAchievement } from "../controllers/achievmentController.js";

const router = express.Router();

router.post("/add-achievements/:clubId", createAchievement);


export default router;
