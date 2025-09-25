import express from "express";
import { addCommittee, getFullCommitteeClub } from "../controllers/committeeController.js";

const router = express.Router();

router.post("/committee/:id", addCommittee);
router.get("/getfullclubcommittee/:id", getFullCommitteeClub);

export default router;
