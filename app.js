const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')

// express app
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.use(userRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server started")
    })
})
.catch((err) => {
    console.log(err)
})
