import express from "express";
import { createClub, getAllclubs, getSingleClubs } from "../controllers/clubController.js";

const router = express.Router();

router.post("/add-club", createClub);
router.get("/all-clubs", getAllclubs);
router.get("/singleClubs/:id", getSingleClubs);

export default router;
