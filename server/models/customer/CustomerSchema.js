// const mongoose = require('mongoose');
const mongoose = require('mongoose')
const addressObj = require('../common/ResidentialAddressObj')//d
const myvehicleObj = require('../customer/VehicleObj')//d
const serviceCentreMsgObj = require('../common/ServiceCentreChatMsgObj')//d
const feedbackMsgObj = require('../common/FeedbackChatMsgObj')//d
const chatbotMsgObj = require('./ChatBotMsgObj')//d

const customerSchema = new mongoose.Schema({
    custID: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    mname: {
        type: String,
        required: false
    },
    lname: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    emailID: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    // address: {
    //     type: String,
    //     required: true
    // },
    address: addressObj,

    ownedEVs: [
        myvehicleObj
    ],
    serviceCentreChat: [
        serviceCentreMsgObj
    ],
    feedbackChat: [
        feedbackMsgObj
    ],
    chatbotChat: [
        chatbotMsgObj
    ],

})

module.exports = mongoose.model('Customer', customerSchema)