const express = require('express')
const {signup, login} = require("../controllers/userControllers")
const router = express.Router();

// signup
router.post('/signup', signup)

// login
router.post('/login', login)

module.exports = router;