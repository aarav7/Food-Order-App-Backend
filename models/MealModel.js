const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add a name value"],
        },
        description: {
            type: String,
            required: [true, "Please add a description value"],
        },
        price: {
            type: Number,
            required: [true, "Please add a price value"],
        },
    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("Meal", mealSchema);