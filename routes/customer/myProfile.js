const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const Customer = require('../../models/customer/CustomerSchema')

router.get('/', async (req, res, next) => {
    //console.log('into conv get')
    //const user = res.locals.user
    const token = req.cookies.jwttoken
    //console.log(req.params.id)
    if(!token)
    {
        console.log("No token")
    }
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
        if (err) { //signatures dont match
            console.log("error "+err)
            res.send("You must be logged in to view this page")

        }
        else {
            console.log(decodedToken.id)
            Customer.findOne({ "_id" : decodedToken.id }).then((result)=>{
                console.log('found')
                console.log(result)
                res.send(result)

            })
            
        }
    })
})

router.put('/updateProfile', (req,res)=>{
    const token = req.cookies.jwttoken
    //console.log(req.params.id)
    if(!token)
    {
        console.log("No token")
    }
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
        if (err) { //signatures dont match
            console.log("error "+err)
            res.send("You must be logged in to view this page")

        }
        else {
            console.log(decodedToken.id)
            const data = req.body.user;
            Customer.updateOne({ "_id" : decodedToken.id },{ '$set': { 'email': data.email, 'password': data.password, 'fname': data.fname, 'mname': data.mname, 'lname': data.lname, 'contact': data.contact, 'dob': data.dob, 'address': data.address } }).then((result)=>{
                res.send('updated')
            })
            
        }
    })
})

module.exports = router