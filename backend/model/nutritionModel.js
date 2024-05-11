const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    meal: {
        required: true,
        type: String
    },
    calories: {
        required: true,
        type: String || Number
    },
    date: {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('nutrition', nutritionSchema)
