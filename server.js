// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("✅ API is running!");
});

// ✅ Auth Routes
app.use("/api/auth", authRoutes);

// ✅ Connect to MongoDB
const collegeConnection = mongoose.createConnection(process.env.MONGO_URI);

collegeConnection.on("connected", () => {
  console.log("✅ Connected to DB:", collegeConnection.name);
});

// ✅ Schema & Model
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Message = collegeConnection.model("Message", MessageSchema, "messages");

// ✅ Routes
app.post("/submit", async (req, res) => {
  try {
    const msg = new Message(req.body);
    await msg.save();
    res.status(201).json({ success: true, msg: "Message saved!" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/messages", async (req, res) => {
  try {
    const msgs = await Message.find().sort({ createdAt: -1 });
    res.json(msgs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});



app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



