const express = require('express');
// const stageController = require('../../controller/customer/stageController')
const router = express.Router();
const jwt = require('jsonwebtoken')


const Customer = require('../../models/customer/CustomerSchema')
const Factory = require('../../models/factory/factorySchema')
const ServiceCenter = require('../../models/service-center/serviceCenterSchema')
const ServiceRequest = require('../../models/service-center/servicingRequestSchema')

router.get('/', (req, res, next) => {
    console.log('into get')
    const token = req.cookies.jwt
    console.log(token)
    res.send(token)
    // Customer.find({})
    //     .then((result) => {
    //         console.log(result)
    //         res.send(result)
    //     })
    //     .catch(next)
})

router.get('/fetchCentres', (req, res) => {
    ServiceCenter.find({}).then((result) => {
        res.send(result)
    })
})

const generateCode = () => {
    let n = (Math.random() * 0xfffff * 100000000000000).toString(16);
    return n;
};

router.post('/bookMyServicing', (req, res) => {
    const newserviceid = generateCode()
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
            console.log(req.body.serviceCentre)

            ServiceCenter.findOne({ 'name': req.body.serviceCentre }).then((resultt) => {

                const newServicing = new ServiceRequest({
                    serviceID: "S" + newserviceid,
                    custID: decodedToken.id,
                    serviceCentreID: resultt._id,
                    timeSlot: req.body.timeslot,
                    appointmentDate: req.body.apptdate,
                    personalNotes: req.body.personalNotes,
                    pickupDrop: req.body.pickupDrop
                })

                newServicing.save().then((myresult) => {
                    console.log(myresult)
                    res.send(myresult)

                })
            })
        }
    })
})



module.exports = router