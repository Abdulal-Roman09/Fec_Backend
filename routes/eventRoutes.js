import express from "express";
import { addEvents } from "../controllers/eventController.js";

const router = express.Router();

router.post("/add-events/:id", addEvents);

export default router;
