const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const app = express();
const mealsRouter = require("./routers/meals");

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors());
app.use('/meals', mealsRouter);

app.listen(3001, () => {
    console.log("Server listening on PORT 3001");
})