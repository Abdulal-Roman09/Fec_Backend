import express from "express";
import {
  addEvents,
  deleteEvent,
  getAllEventByClubId,
  getAllevents,
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/add-events/:id", addEvents);
router.get("/all-events", getAllevents);
router.delete("/clubs/:clubId/events/:eventId", deleteEvent);
router.get("/single-club-event/:id", getAllEventByClubId);

export default router;
