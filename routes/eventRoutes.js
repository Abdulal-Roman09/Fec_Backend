import express from "express";
import {
  addEvents,
  deleteEvent,
  eventDetails,
  getAllEventByClubId,
  getAllevents,
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/add-events/:id", addEvents);
router.get("/all-events", getAllevents);
router.get("/clubs/:clubId/event-detetils/:eventId", eventDetails);
router.get("/single-club-event/:id", getAllEventByClubId);
router.delete("/clubs/:clubId/events/:eventId", deleteEvent);

export default router;
