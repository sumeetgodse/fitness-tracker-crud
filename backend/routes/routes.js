const express = require('express');
const userModel = require('../model/userModel');
const activityModel = require('../model/activityModel');
const nutritionModel = require('../model/nutritionModel');

const router = express.Router()

module.exports = router;

// register user
router.post('/register', async (req, res) => {
    const data = new userModel({
        username: req.body.username,
        password: req.body.password
    })
    const checkUser = await userModel.findOne({ username: req.body.username })
    if (checkUser) {
        res.status(400).json({ message: "USER_ALREADY_EXISTS" })
    } else {
        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
})

// login
router.post('/login', async (req, res) => {
    const checkUser = await userModel.findOne({ username: req.body.username })
    if (checkUser && checkUser.password === req.body.password) {
        return res.status(200).json({
            message: "LOGIN_SUCCESS"
        });
    } else {
        return res.status(400).json({
            message: "LOGIN_FAILED"
        });
    }
})

// log a new activity
router.post('/log-new-activity', async (req, res) => {
    const data = new activityModel({
        username: req.body.username,
        date: req.body.date,
        activityType: req.body.activityType,
        duration: req.body.duration,
        distance: req.body.distance,
        caloriesBurned: req.body.caloriesBurned
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// get all activities for a user
router.get('/get-activities/:username', async (req, res) => {
    try {
        const activities = await activityModel.find()
        res.status(200).json(activities.filter((activity) => activity.username === req.params.username))
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// delete an activity
router.delete('/delete-activity/:activityId', async (req, res) => {
    try {
        const deletedActivity = await activityModel.findByIdAndDelete(req.params.activityId)
        res.status(200).json(deletedActivity)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// add a new nutrition intake
router.post('/add-new-nutrition', async (req, res) => {
    const data = new nutritionModel({
        username: req.body.username,
        meal: req.body.meal,
        calories: req.body.calories,
        date: req.body.date
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// get all nutrition tracking data for a user
router.get('/get-nutrition/:username', async (req, res) => {
    try {
        const nutritions = await nutritionModel.find()
        res.status(200).json(nutritions.filter((nutrition) => nutrition.username === req.params.username))
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// delete an nutrition tracking data
router.delete('/delete-nutrition/:nutritionId', async (req, res) => {
    try {
        const deletedNutrition = await nutritionModel.findByIdAndDelete(req.params.nutritionId)
        res.status(200).json(deletedNutrition)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
