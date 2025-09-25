import express from "express";
import {
  addEvents,
  getAllEventByClubId,
  getAllevents,
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/add-events/:id", addEvents);
router.get("/all-events", getAllevents);
router.get("/single-club-event/:id", getAllEventByClubId);


export default router;
