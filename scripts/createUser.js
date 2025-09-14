// scripts/createUser.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

async function createUser() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // 👇 Delete old admin user if it exists
    await User.deleteOne({ username: "admin" });

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const user = new User({
      username: "admin",
      password: hashedPassword,
    });

    await user.save();
    console.log("✅ Admin user created:", user.username);

    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error creating user:", err);
  }
}

createUser();
