const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const data = await Product.find();
  res.json(data);
});

// ADD PRODUCT
router.post("/", async (req, res) => {
  const item = new Product(req.body);
  await item.save();
  res.json(item);
});

module.exports = router;
