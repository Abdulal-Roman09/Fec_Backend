// app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// import routes
import clubRoutes from "./routes/clubRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import committeeRoutes from "./routes/committeeRoutes.js";
import achievmentController from "./routes/achievementRoutes.js";
import eventCarouselRoutes from "./routes/eventCarouselRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// CORS setup
app.use(
  cors({
    origin: ["http://localhost:5173", "https://fec-club-hub-client-qya2.vercel.app"],
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

// Routes
app.use("/api/v1", clubRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", eventRoutes);
app.use("/api/v1", committeeRoutes);
app.use("/api/v1", eventCarouselRoutes);
app.use("/api/v1", achievmentController);
app.use("/api/v1", testimonialRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

export default app;
