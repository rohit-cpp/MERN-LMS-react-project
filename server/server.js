import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongoDB.js";

const app = express();

const PORT = process.env.PORT || 5000;
connectDB();
const MONGO_URI = process.env.MONGO_URI;

cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));
app.get("/", (req, res) => res.send("Api Working"));
app.listen(PORT, () => {
  console.log(`Server is now Running at PORT ${PORT} `);
});
