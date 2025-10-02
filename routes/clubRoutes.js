import express from "express";
import {
  createClub,
  deleteClub,
  getAllclubs,
  getSingleClubs,
} from "../controllers/clubController.js";

const router = express.Router();

router.post("/add-club", createClub);
router.get("/all-clubs", getAllclubs);
router.get("/singleClubs/:id", getSingleClubs);
router.delete("/delete-club/:id", deleteClub);

export default router;
