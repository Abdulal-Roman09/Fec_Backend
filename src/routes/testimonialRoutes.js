import express from "express";
import { addTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.post("/add-testimonial/:clubId/:userId", addTestimonial);


export default router;
