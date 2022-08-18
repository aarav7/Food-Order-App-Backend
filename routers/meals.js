const express = require("express");
const router = express.Router();

const Meal = require("../models/MealModel.js")

router.get('/', function (req, res) {
    Meal.find().then((data) => {
        console.log(data);
        res.json(data);
    });
});

module.exports = router;