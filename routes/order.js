const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// GET ORDERS
router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ date: -1 });
  res.json(orders);
});

// CREATE ORDER
router.post("/", async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.json(order);
});

module.exports = router;
