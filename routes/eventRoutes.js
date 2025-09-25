import express from "express";
import { addEvents, getAllevents } from "../controllers/eventController.js";

const router = express.Router();

router.post("/add-events/:id", addEvents);
router.get("/all-events", getAllevents);

export default router;
