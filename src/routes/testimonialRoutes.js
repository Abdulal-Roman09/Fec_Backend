import express from "express";
import {
  addTestimonial,
  getAllTestimonial,
} from "../controllers/testimonialController.js";

const router = express.Router();

router.post("/add-testimonial/:clubId/:userId", addTestimonial);
router.get("/get-all-tastimonial", getAllTestimonial);

export default router;
