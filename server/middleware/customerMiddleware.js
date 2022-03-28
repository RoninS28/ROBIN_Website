const jwt = require('jsonwebtoken')
const cookieParser = require("cookie-parser");

const requireCustAuth = (req, res, next) => {

    const token = req.cookies.jwttoken
    console.log(token)

    // check json web token exists and is verified
    // if(!token)
    // {
    //     console.log("Not token")
    //     res.redirect('http://localhost:3000/login')
    // }
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
            if (err) { //signatures dont match
                console.log(err);
                res.send("You must be logged in to view this page");
            }
            else {
                console.log("valid");
                next();
            }
        })
    }
    else {
        console.log("in else")
        res.send("You must be logged in to view this page");
    }


}

// check current user
const checkCustUser = (req, res, next) => {
    const token = req.cookies.jwt

    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
            if (err) { //signatures dont match
                res.locals.user = null //this locals prop makes it available to te views

                next()

            }
            else {
                let user = await User.findById(decodedToken.id)
                res.locals.user = user //this locals prop makes it available to te views
                next()
            }
        })
    }
    else {
        res.locals.user = null //this locals prop makes it available to te views
        next()
    }
}

const getUserID = (req) => {
    const token = req.cookies.jwttoken
    console.log("token "+token)
    
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
            if (err) { //signatures dont match
                console.log("error "+err)
                return "null";

            }
            else {
                // User.findById(decodedToken.id).then((result)=>{
                //     return result;
                // })
                console.log(decodedToken.id)
                return ""+decodedToken.id;
                //res.locals.user = user //this locals prop makes it available to te views
                //return user;
            }
        })
    }
    else {
        console.log("in else")
        return "null1";
    }
}

module.exports = { requireCustAuth, checkCustUser, getUserID }