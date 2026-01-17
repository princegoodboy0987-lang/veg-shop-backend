require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// DB CONNECT
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("DB Error:", err.message));

// ROUTES
app.use("/products", require("./routes/product"));
app.use("/orders", require("./routes/order"));
app.use("/auth", require("./routes/auth"));

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Veg Shop Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
