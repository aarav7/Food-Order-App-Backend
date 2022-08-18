const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
const mealsRouter = require("./routers/meals");

mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use("/meals", mealsRouter);
app.get("/", (req, res) => {
  res.status(200).send("Server Listening on PORT 5000");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server listening on PORT" + " " + PORT);
});
