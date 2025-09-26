import express from "express";
import {
  allAchivements,
  createAchievement,
} from "../controllers/achievmentController.js";

const router = express.Router();

router.post("/:clubId/add-achievements", createAchievement);
router.get("/all-achievements", allAchivements);
router.get("/clubs/:clubId/achievements", allAchivements);

export default router;
