import express from "express";
import {
  addEventCarousel,
  deletedEventCarousel,
} from "../controllers/eventCarouselController.js";

const router = express.Router();

// POST add event carousel
router.post("/add-event-carousel", addEventCarousel);
router.delete("/delete-event-carousel/:id", deletedEventCarousel);

export default router;
