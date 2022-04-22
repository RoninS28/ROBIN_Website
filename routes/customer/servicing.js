const express = require('express');
// const stageController = require('../../controller/customer/stageController')
const router = express.Router();
const jwt = require('jsonwebtoken')


const Customer = require('../../models/customer/CustomerSchema')
const ServiceCenter = require('../../models/service-center/serviceCenterSchema')

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



module.exports = router