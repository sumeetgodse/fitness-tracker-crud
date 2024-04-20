require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

const usersDatabaseUrl = process.env.USERS_DATABASE_URL;

mongoose.connect(usersDatabaseUrl);
const userDB = mongoose.connection;

userDB.on('error', (error) => {
    console.log("UserDB Error" + error)
})

userDB.once('connected', () => {
    console.log('USER Database Connected');
})

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes)

app.listen(8001, () => {
    console.log(`Server Started at ${8001}`)
})
