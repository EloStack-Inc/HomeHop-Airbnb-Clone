require("dotenv").config({
  path: "/Users/gelo/Desktop/SQ/Airbnb-Clone/HomeHop-Airbnb-Clone/airbnb_clone/.env",
});

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

(async () => {
  try {
    const { default: dbConnect } = await import("../utils/dbConnect.js");

    // Connect to MongoDB
    await dbConnect();
    console.log("MongoDB connected");

    // Middleware
    app.use(bodyParser.json());

    // Routes
    const userRoutes = await import("../pages/api/userRoutes.js");
    app.use("/api/users", userRoutes.default);

    // Start the server after the DB is connected
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
})();
