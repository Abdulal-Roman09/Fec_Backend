import express from "express";
import { createClub, getAllclubs } from "../controllers/clubController.js";

const router = express.Router();

router.post("/add-club", createClub);
router.get("/all-clubs", getAllclubs);

export default router;
