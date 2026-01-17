const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Order",
  new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    items: Array,
    total: Number,
    date: { type: Date, default: Date.now }
  })
);
