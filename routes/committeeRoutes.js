import express from "express";
import { addCommittee } from "../controllers/committeeController.js";

const router = express.Router();

router.post("/committee/:id", addCommittee);

export default router;
