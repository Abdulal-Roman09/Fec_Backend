import express from "express";
import {
  addCommittee,
  deleteCommitteeMember,
  getFullCommitteeClub,
  updateCommitteeMember,
} from "../controllers/committeeController.js";

const router = express.Router();

router.post("/committee/:id", addCommittee);
router.get("/getfullclubcommittee/:id", getFullCommitteeClub);
router.delete("/committee/:clubId/delete/:memberId", deleteCommitteeMember);
router.put("/committee/:clubId/update/:memberId", updateCommitteeMember);

export default router;
