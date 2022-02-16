const mongoose = require('mongoose');
const address = require('../common/ResidentialAddressObj')
const myvehicle = require('../customer/VehicleObj')
const serviceCentreMsg = require('../common/ServiceCentreChatMsgObj')
const feedbackMsg = require('../common/FeedbackChatMsgObj')
const chatbotMsg = require('../customer/ChatBotMsgObj')

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
    address: address,

    ownedEVs: [
        myvehicle
    ],
    // serviceCentreChat: [
    //     serviceCentreMsg
    // ],
    // feedbackChat: [
    //     feedbackMsg
    // ],
    // chatbotChat: [
    //     chatbotMsg
    // ],

})

module.exports = mongoose.model('testforCust', customerSchema)