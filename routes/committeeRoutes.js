import express from "express";
import { addCommittee, deleteCommitteeMember, getFullCommitteeClub } from "../controllers/committeeController.js";

const router = express.Router();

router.post("/committee/:id", addCommittee);
router.get("/getfullclubcommittee/:id", getFullCommitteeClub);
router.delete("/committee/:clubId/delete/:memberId", deleteCommitteeMember);

export default router;
