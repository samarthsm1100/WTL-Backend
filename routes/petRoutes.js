const express = require('express');
const Pet = require('../models/petModel');
const { validateToken } = require('../middleware/requireAuth');
const { postFoundPet } = require('../controllers/petControllers');

const router = express.Router();
const upload = require('../middleware/upload');

router.post('/foundpet', validateToken, upload.single('image_url'), postFoundPet );

module.exports = router;