const express = require('express');
const { validateToken } = require('../middleware/requireAuth');
const { getAllPets, getPetByID, stories, contactReporter, foundPet, myReportedPets, claimedPet } = require('../controllers/petControllers');

const router = express.Router();
const upload = require('../middleware/upload');

router.post('/foundpet', validateToken, upload.single('image_url'), foundPet );
router.get('/pet', validateToken, getPetByID);
router.get('/allpets', validateToken, getAllPets);
router.get('/stories',validateToken, stories)
router.post('/contactreporter/:id', validateToken, contactReporter)
router.get('/reportedPets', validateToken, myReportedPets)
router.put('claimedPet/:id', validateToken, claimedPet)

module.exports = router;