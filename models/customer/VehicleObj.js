const servicingInfoObj = require('./ServicingObj')
const stageObj = require('./StageObj')
const accessoryObj = require('./AccessoriesObj')
const mongoose = require('mongoose');

const vehicleObj = {
    ticketID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {//delivered - true or manufacturing - false
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    factoryID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    factoryManagerID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    modelID: {
        type: String,
        required: true
    },
    modelName: {
        type: String,
        required: true
    },
    variant: {// eg: top end model
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    expectedDeliveryDate: {
        type: String,
        required: false
    },
    deliveryDate: {
        type: Date,
        required: false
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    chassisNumber: {
        type: String,
        required: true
    },
    nextServicingDate: {
        type: Date,
        required: true
    },
    servicing: [
        servicingInfoObj
    ],
    currentStage: {
        type: Number,
        required: true
    },
    stages: [
        stageObj
    ],
    accessories: [
        accessoryObj
    ],
}

module.exports = vehicleObj