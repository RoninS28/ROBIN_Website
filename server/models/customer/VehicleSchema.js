const mongoose = require('mongoose');
const servicingInfo = require('../customer/ServicingSchema')
const stage = require('../customer/StageSchema')
const accessory = require('../customer/AccessoriesSchema')

const vehicle = new mongoose.Schema({
    ticketID: {
        type: String,
        required: true
    },
    status: {//delivered - true or manufacturing - false
        type: Boolean,
        required: true
    },
    modelID: {
        type: String,
        required: true
    },
    variant: {// eg: top end model
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    chassisNumber: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: true
    },
    dealerID: {
        type: String,
        required: true
    },
    dealerName: {
        type: String,
        required: true
    },
    servicing: [
        servicingInfo
    ],
    stages: [
        stage
    ],
    accessories: [
        accessory
    ],
})

module.exports = mongoose.model('MyVehicle', vehicle)