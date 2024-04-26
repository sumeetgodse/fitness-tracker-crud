const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: String
    },
    activityType: {
        required: true,
        type: String
    },
    duration: {
        required: true,
        type: String || Number
    },
    distance: {
        required: false,
        type: String || Number
    },
    caloriesBurned: {
        required: true,
        type: String || Number
    },
})

module.exports = mongoose.model('activityLogging', activitySchema)
