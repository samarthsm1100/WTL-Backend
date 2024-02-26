const express = require('express')
const {signup, login, logout} = require("../controllers/userControllers")
const router = express.Router();

// signup
router.post('/signup', signup)

// login
router.post('/login', login)

// logout
router.get('/logout', logout)

module.exports = router;