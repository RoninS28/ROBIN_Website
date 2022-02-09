const mongoose = require('mongoose');
const address = require('../common/ResidentialAddressSchema')
const myvehicle = require('../customer/VehicleSchema')
const serviceCentreMsg = require('../common/ServiceCentreChatMsgSchema')
const feedbackMsg = require('../common/FeedbackChatMsg')
const chatbotMsg = require('../customer/ChatBotMsgSchema')

const customerSchema = new mongooose.Schema({
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
        type: Date
    },
    address: address,

    ownedEVs: [
        myvehicle
    ],
    serviceCentreChat: [
        serviceCentreMsg
    ],
    feedbackChat: [
        feedbackMsg
    ],
    chatbotChat: [
        chatbotMsg
    ],

})

module.exports = mongoose.model('Customer', customerSchema)