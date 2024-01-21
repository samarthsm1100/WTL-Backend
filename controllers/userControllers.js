const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const { createToken } = require('../middleware/requireAuth');

const signup = async (req,res) => {
    try{ const {email, password} = req.body;

    const exists =await User.findOne({email: email})

    if(exists){
        return res.status(400).json({message: "User already exists"})
        
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        email: email,
        password: hashedPassword,
        name: req.body.name,
        username: req.body.username,
        phone: req.body.phone,
        address: req.body.address
    })

    const savedUser = await user.save();
    
    res.status(201).json("User created!");  
    
}
    
    catch(e){
        console.log(e)
    }
   
}

const login = async (req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email})

    if(!user){
        res.status(400).json({message: "User does not exist"})
        return
    }

    const valid = bcrypt.compare(password, user.password);

    if(valid){
        const accessToken = createToken(user);
        console.log(user)
        res.cookie("accessToken", accessToken, {
            maxAge: 1000*60,
        })
        res.cookie("userId", user._id.toString(), {
            maxAge: 1000*60,
        })
        res.json("LoggedIn")
    }
}

module.exports = {login, signup}