const router = require("express").Router();
const Product = require("../models/Product");

// GET PRODUCTS
router.get("/", async (req, res) => {
  const data = await Product.find();
  res.json(data);
});

// ADD PRODUCT (ADMIN)
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ success: true });
});

module.exports = router;

