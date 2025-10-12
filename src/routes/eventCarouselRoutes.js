import express from "express";
import {
  addEventCarousel,
  deletedEventCarousel,
  getAllEventCarousle,
} from "../controllers/eventCarouselController.js";

const router = express.Router();

router.post("/add-event-carousel", addEventCarousel);
router.get("/get-all-event-carousel", getAllEventCarousle);
router.delete("/delete-event-carousel/:id", deletedEventCarousel);

export default router;
