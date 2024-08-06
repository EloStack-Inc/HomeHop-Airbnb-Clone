import express from "express";
import bcrypt from "bcryptjs";
import User from "../../backend/models/User.js";

const router = express.Router();

// Register new user
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate user input
    if (!(username && email && password)) {
      return res.status(400).send("All input is required");
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    // Hash the password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    // Return the new user
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server error");
  }
});

export default router;
