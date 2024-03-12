const {sign, verify} = require('jsonwebtoken')

const createToken = async(user) => {
    const accessToken = sign({email: user.email, id: user._id}, process.env.SECRET)
    return accessToken
}

const validateToken = (req,res,next) => {
    const accessToken = req.cookies["accessToken"]
    const userid = req.cookies["userId"]
    
    if(!accessToken){
        return res.status(400).json({error : "User not Authenticated"})
    }

    try{
        const validToken = verify(accessToken, process.env.SECRET)
        if(validToken){
            req.authenticated = true;
            res.cookie("accessToken", accessToken, {
                maxAge: 1000*60*60*24*30,
                sameSite: "None",
                secure: true, // Note the lowercase 's',
                httpOnly: true,
                partitioned: true
            });
            
            res.cookie("userId", userid, {
                maxAge: 1000*60*60*24*30,
                sameSite: "None", // Use lowercase 'sameSite'
                secure: true ,
                httpOnly: true
            });
            next();
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