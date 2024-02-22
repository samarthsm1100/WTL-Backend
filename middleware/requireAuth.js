const {sign, verify} = require('jsonwebtoken')

const createToken = async(user) => {
    const accessToken = sign({email: user.email, id: user._id}, process.env.SECRET)
    return accessToken
}

const validateToken = (req,res,next) => {
    const accessToken = req.cookies["accessToken"]
    console.log("req",req.cookies)
    if(!accessToken){
        return res.status(400).json({error : "User not Authenticated"})
    }

    try{
        const validToken = verify(accessToken, process.env.SECRET)
        if(validToken){
            req.authenticated = true;
            return next();
        }
        else{
            return res.status(400).json({error : "User not Authenticated"})
        }
    }
    catch(err){
        return res.status(400).json({error : err})
    }
}

module.exports = {createToken, validateToken}