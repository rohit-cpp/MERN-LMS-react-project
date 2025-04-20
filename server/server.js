require("dotenv").config();
const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "DELETE", "PUT"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.use(express.json());

// DataBase Connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB is Connected Successfully"))
  .catch((e) => console.log(e));
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ success: false, message: "Something went Wrong" });
});

app.listen(PORT, () => {
  console.log(`Server is now Running at PORT ${PORT} `);
});
