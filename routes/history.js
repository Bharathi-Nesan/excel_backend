const express = require("express");
const router = express.Router();
const History = require("../models/History");

// Save chart config
router.post("/save", async (req, res) => {
  try {
    const { fileName, xAxis, yAxis, chartType, userEmail } = req.body;
    const entry = new History({ fileName, xAxis, yAxis, chartType, userEmail });
    await entry.save();
    res.json({ message: "Saved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save history" });
  }
});

// Get history for user
router.get("/user/:email", async (req, res) => {
  try {
    const history = await History.find({ userEmail: req.params.email }).sort({ createdAt: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
});

module.exports = router;
