const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("🎉 Mini Express server works!");
});

app.listen(3000, () => {
  console.log("🚀 Mini server running at http://localhost:3000");
});
