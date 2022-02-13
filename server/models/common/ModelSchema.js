//! this is a Vehicle (EV) Model schema
const mongoose = require('mongoose');
const discount = require('../common/DiscountSchema')



const model = new mongoose.Schema({
    modelID: {
        type: String,
        required: true,
        unique: true
    },
    modelName: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    waitingPeriod: {//no of days
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    // discounts: [
    //     discount
    // ],
    // enginePower: {
    //     type: Number,
    //     required: true
    // },
    // emissionCriteria: {// eg: bs4 or bs6
    //     type: String,
    //     required: true
    // },
    // torque: {
    //     type: Number,
    //     required: true
    // },
    // mileage: {
    //     type: Number,
    //     required: true
    // },
    // suspension: {//eg mono syspension ,e tc
    //     type: String,
    //     required: true
    // },
    // brakingSystem: {//eg drum, disc etc
    //     type: String,
    //     required: true
    // },
    // fuelTankCapacity: {// in terms of litres
    //     type: Number,
    //     required: true
    // },
    // emergencyFuelCapacity: {
    //     type: Number,
    //     required: true
    // },
    // turningRadius: {
    //     type: Number,
    //     required: true
    // },
    // colors: [
    //     {
    //         type: String,
    //         required: true
    //     }
    // ],
    // height: {
    //     type: Number,
    //     required: true
    // },
    // weight: {
    //     type: Number,
    //     required: true
    // },
    // tyreDetails: { // todo or just mention tyreID which gives you the details
    //     // todo tyre object
    // },
    // trunkCapacity: {// in case the dealer wants to mention about additional facilities provided in the trunk, a separate object has to be made, along with the provision to display photos in the website
    //     type: Number,
    //     required: true
    // },
    // groundClearance: {
    //     type: Number,
    //     required: true
    // },
    // seatDetails: {//todo an object for this too has to be made
    //     type: String,
    //     required: true
    // },
    // batterydetails: {//todo an object for this too has to be made
    //     type: String,
    //     required: true
    // }


})

module.exports = mongoose.model('EVModel', model)