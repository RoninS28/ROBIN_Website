const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    // ticketID: {
    //     type: String,
    //     required: true
    // },
    purchaseDate: {
        type: Date,
        required: true
    },
    custID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    factoryID: {// the facory which is manufacturing the product
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    factoryBatchNumber: {
        type: Number,
        required: true
    },
    factoryWorkerID: {// ID of the person in charge of that unit in which the product is being manufactured
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    modelID: {
        type: String,
        required: true
    },
    modelName: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    active: {// true - in production, false - delivered
        type: Boolean,
        required: true
    },
    expectedDeliveryDate: {
        type: Date,
        required: true
    },
    variant: {// eg: top end model
        type: String,
        required: true
    },
    fault: {//if true, it means a fault has been occured
        type: Boolean,
        required: true
    },
    faultMsg: {
        type: String,
        required: false
    },



})

module.exports = mongoose.model('Order', orderSchema)