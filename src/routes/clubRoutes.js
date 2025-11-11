import express from "express";
import {
  createClub,
  deleteClub,
  getallclub,
  getAllclubs,
  getFilterClubs,
  getSingleClubs,
} from "../controllers/clubController.js";

const router = express.Router();

router.post("/add-club", createClub);
router.get("/all-clubs", getAllclubs);
router.get("/get-all-clubs", getallclub);
router.get("/singleClubs/:id", getSingleClubs);
router.get("/clubs", getFilterClubs);
router.delete("/delete-club/:id", deleteClub);

export default router;
