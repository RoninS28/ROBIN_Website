const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const CustomerFeedback = require('../../models/customer/CustomerFeedbackSchema')


router.post("/", (req, res) => {
    const value = req.body.feedbackMsg
    const token = req.cookies.jwttoken
    //console.log(req.params.id)
    if (!token) {
        console.log("No token")
    }
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
        if (err) { //signatures dont match
            console.log("error " + err)
            res.send("You must be logged in to view this page")

        }
        else {
            console.log(decodedToken.id)
            const newfeedback = new CustomerFeedback({
                custID: decodedToken.id,
                feedbackMsg: value,
                feedbackDate: Date.now()
            })

            newfeedback.save().then((result) => {

                res.send(result)
            })

        }
    })


})

router.get('/getall', (req, res) => {
    CustomerFeedback.find({})
        .then((result) => {
            console.log(result)
            res.send(result)
        })
        .catch(next)
})


module.exports = router