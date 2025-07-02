const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  fileName: String,
  xAxis: String,
  yAxis: String,
  chartType: String,
  userEmail: String, // or userId if using _id
}, { timestamps: true });

module.exports = mongoose.model("History", historySchema);
