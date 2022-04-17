
const jwt = require('jsonwebtoken');

const Worker = require("../models/factory/userSchema");

const Authenticate = async(req,res,next) => {

    try{
        const token= req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,"mynameispictpunemaharashtraindia");

        const rootUser = await Worker.findOne({_id: verifyToken._id, "tokens.token": token});

        if(!rootUser) { throw new Error('User not Found')}

        req.token =token;
        req.rootUser = rootUser;
        req.userID = rootUser._id; 

        next();

    }catch(err){
        res.status(401).send('Unauthorized:');
        console.log(err);
    }
}

module.exports = Authenticate