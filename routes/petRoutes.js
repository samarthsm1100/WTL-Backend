const express = require('express');
const Pet = require('../models/petModel');
const { validateToken } = require('../middleware/requireAuth');
const { postFoundPet, getAllPets, getPetByID, stories } = require('../controllers/petControllers');

const router = express.Router();
const upload = require('../middleware/upload');

router.post('/foundpet', validateToken, upload.single('image_url'), postFoundPet );
router.get('/pet', validateToken, getPetByID);
router.get('/allpets', validateToken, getAllPets);
router.get('/stories', validateToken, stories)

module.exports = router;