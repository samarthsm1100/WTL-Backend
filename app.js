const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const petRoutes = require('./routes/petRoutes')
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('./cronJob')

// express app
const app = express();

// middleware
app.use(cors({
   origin:["*","https://wtl-frontend.vercel.app"],
   credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

// routes
app.use(userRoutes)
app.use(petRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Server started")
    })
})
.catch((err) => {
    console.log(err)
})
