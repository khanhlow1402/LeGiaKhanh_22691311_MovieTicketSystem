import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/movies", movieRoutes);

const PORT = process.env.PORT || 8082;

// ⚠️ Quan trọng: listen 0.0.0.0 để chạy LAN
app.listen(PORT, () => {
  console.log("Movie Service running on port 8082");
});
