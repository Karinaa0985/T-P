// testServer.js
const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("✅ API is running fine on CommonJS test server!");
});

app.get("/hello", (req, res) => {
  res.send("👋 Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`🚀 Test server running at http://localhost:${PORT}`);
});
