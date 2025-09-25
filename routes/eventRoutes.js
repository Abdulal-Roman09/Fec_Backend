import express from "express";
import {
  addEvents,
  deleteEvent,
  eventDetails,
  getAllEventByClubId,
  getAllevents,
  updateEvent,
} from "../controllers/eventController.js";

const router = express.Router();

router.post("/add-events/:id", addEvents);
router.get("/all-events", getAllevents);
router.get("/clubs/:clubId/event-detetils/:eventId", eventDetails);
router.get("/single-club-event/:id", getAllEventByClubId);
router.put("/clubs/:clubId/events-update/:eventId", updateEvent);
router.delete("/clubs/:clubId/events/:eventId", deleteEvent);

export default router;
