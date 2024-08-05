require("dotenv").config({
  path: "/Users/gelo/Desktop/SQ/Airbnb-Clone/HomeHop-Airbnb-Clone/airbnb_clone/.env",
});

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
