const Pet = require('../models/petModel');

const postFoundPet = async (req, res) => {
    const userId = req.cookies["userId"]
    if(!userId){
        return res.status(400).json({error : "User not Authenticated"})
    }
    const {species, breed, color, location, status, description} = req.body;
    const pet = new Pet({
        species,
        breed,
        color,
        location,
        status,
        description,
        reportedBy: userId
    })
    if(req.file){
        pet.image_url = req.file.path
    }
    try {
        // const newPet = await pet.save();
        console.log(pet)
        res.status(201).json(pet);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

module.exports = {postFoundPet}