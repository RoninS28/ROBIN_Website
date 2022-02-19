const servicingInfoObj = require('./ServicingObj')
const stageObj = require('./StageObj')
const accessoryObj = require('./AccessoriesObj')

const vehicleObj = {
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
        servicingInfoObj
    ],
    stages: [
        stageObj
    ],
    accessories: [
        accessoryObj
    ],
}

module.exports = vehicleObj