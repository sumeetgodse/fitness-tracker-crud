const express = require('express');
const userModel = require('../model/userModel');

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
