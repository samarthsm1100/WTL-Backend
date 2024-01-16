const Pet = require('../models/petModel');

const postFoundPet = async (req, res) => {
    const userId = req.cookies["userId"]
    if(!userId){
        return res.status(400).json({error : "User not Authenticated"})
    }
    const {species, breed, color, address, status, description} = req.body;
    const pet = new Pet({
        species,
        breed,
        color,
        address,
        status,
        description,
        reportedBy: userId
    })
    if(req.file){
        pet.image_url = req.file.path
    }
    try {
        const newPet = await pet.save();
        // console.log(pet)
        res.status(201).json(newPet);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

const getAllPets = async(req,res) => {
    try{
        const petData = await Pet.find({});
        console.log(petData)
        res.status(200).json(petData);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
}

const getPetByID = async(req,res) => {
    try{
        const {_id} = req.body;
        const petData = await Pet.findById(_id);
        res.status(200).json(petData);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
}

module.exports = {postFoundPet, getAllPets, getPetByID}