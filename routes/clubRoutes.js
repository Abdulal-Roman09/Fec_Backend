import express from "express";
import { createClub } from "../controllers/clubController.js";

const router = express.Router();

router.post("/add-club", createClub);

export default router;
