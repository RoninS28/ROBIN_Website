const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    ticketID: {
        type: String,
        required: true
    },
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
    factoryManagerID: {// ID of the person in charge of that unit in which the product is being manufactured
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
    stages: [//pending || ongoing || complete 
        { stage1: String },
        { stage2: String },
        { stage3: String },
        { stage4: String },
        { stage5: String },
        { stage6: String },
        { stage7: String },
        { stage8: String },
        { stage9: String },
    ],
    fault: {//if true, it means a fault has been occured
        type: Boolean,
        required: true
    },
    faultMsg: {
        type: String,
        required: true
    },



})

module.exports = mongoose.model('Order', orderSchema)