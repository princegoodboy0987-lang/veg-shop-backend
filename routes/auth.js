const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  res.json(await User.create({ email: req.body.email, password: hash }));
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User not found");
  const ok = await bcrypt.compare(req.body.password, user.password);
  if (!ok) return res.status(400).send("Wrong password");
  res.json({ success: true });
});

module.exports = router;
