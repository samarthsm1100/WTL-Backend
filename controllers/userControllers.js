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
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email})

        if(!user){
            res.status(400).json({message: "User does not exist"})
            return
        }

        const valid = await bcrypt.compare(password, user.password);
        console.log(valid)
        if(valid){
            const accessToken = await createToken(user);
            //  console.log(accessToken)
            res.cookie("accessToken", accessToken, {
                maxAge: 1000*60*60*24*30,
                sameSite: "Lax",
                
            })
            res.cookie("userId", user._id.toString(), {
                maxAge: 1000*60*60*24*30,
                sameSite: "Lax",
            })
            res.json("LoggedIn")
        }
    } catch (error) {
        return res.status(500).json({error : "Login Error"});
    }
}

const logout = async (req,res) => {
    try {
        res.clearCookie("accessToken");
        res.clearCookie("userId");
        res.json("LoggedOut")
    } catch (error) {
        return res.status(500).json({error : "Logout Error"});
    }
}

module.exports = {login, signup, logout}