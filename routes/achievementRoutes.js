import express from "express";
import {
  allAchivements,
  createAchievement,
  deleteAchievement,
  updateAchievement,
} from "../controllers/achievmentController.js";

const router = express.Router();

router.post("/:clubId/add-achievements", createAchievement);
router.get("/all-achievements", allAchivements);
router.get("/clubs/:clubId/achievements", allAchivements);
router.delete("/clubs/:clubId/delete/:achievementId", deleteAchievement);
router.put("/clubs/:clubId/update/:achievementId", updateAchievement);

export default router;
