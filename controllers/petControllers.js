const Pet = require('../models/petModel');
const User = require('../models/userModel');

const foundPet = async (req, res) => {
    const userId = req.cookies["userId"]
    if(!userId){
        return res.status(400).json({error : "User not Authenticated"})
    }
    const {species, breed, color, addr, desc, image_url} = req.body;
    const pet = new Pet({
        image_url,
        species,
        breed,
        color,
        address: addr,
        description: desc,
        reportedBy: userId,
    })
    try {
        const newPet = await pet.save();
        console.log(newPet)
        res.status(201).json(newPet);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

const contactReporter = async (req, res) => {
    try {
        const reporter = await User.findById(req.params.id);
        try {
            return res.status(200).json({
                name: reporter.name,
                phone: reporter.phone,
                address: reporter.address,
                email: reporter.email
            })    
        } catch (error) {
            return res.status(500).json({message: error.message})
        }

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const getAllPets = async(req,res) => {
    try{
        const petData = await Pet.find({status: 'active'});
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

const stories = async (req,res) => {
    try {
        const data = await Pet.find({status: "Returned"})
        return res.status(200).json(data)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const myReportedPets = async (req,res) => {
    try {
        const userID = req.cookies["userId"]
        const data = await Pet.find({reportedBy: userID})
        console.log("Data " ,data)
        return res.status(200).json({data: data})

    } catch (error) {
        return res.json({message: error.message})
    }
}

const claimedPet = async (req, res) => {
    try {
        const petId = req.params.id;
        console.log(petId, "Pet ID")
        const resp = await Pet.findByIdAndUpdate(petId, { status: "Returned" });
        console.log(resp);
        return res.status(200).json({ message: "Pet status updated successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

const deleteAll = async(req,res) => {
    try {
        await Pet.deleteMany({});
        return res.json({message: "All pets deleted successfully"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = {foundPet, getAllPets, getPetByID, stories, contactReporter, myReportedPets, deleteAll, claimedPet}