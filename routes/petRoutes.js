const express = require('express');
const { validateToken } = require('../middleware/requireAuth');
const { getAllPets, getPetByID, stories, contactReporter, foundPet, myReportedPets, claimedPet, deleteAll } = require('../controllers/petControllers');

const router = express.Router();

router.post('/foundpet', validateToken, foundPet );
router.get('/pet', validateToken, getPetByID);
router.get('/allpets', validateToken, getAllPets);
router.get('/stories',validateToken, stories)
router.get('/contactreporter/:id', validateToken, contactReporter)
router.get('/reportedPets', validateToken, myReportedPets)
router.put('/claimedPet/:id', validateToken, claimedPet)
router.delete('/deleteAll', validateToken, deleteAll)

module.exports = router;