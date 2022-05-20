const mongoose = require('mongoose')
// delete mongoose.models['customer'];


// const mongoose = require('mongoose');
const addressObj = require('../common/ResidentialAddressObj')//d
const myvehicleObj = require('../customer/VehicleObj')//d
const serviceCentreMsgObj = require('../common/ServiceCentreChatMsgObj')//d
const feedbackMsgObj = require('../common/FeedbackChatMsgObj')//d
const chatbotMsgObj = require('./ChatBotMsgObj')//d
// mongoose.models = {};
// mongoose.modelSchemas = {};
// if (mongoose.models.Customer) {
//     delete mongoose.models.Customer
//     console.log('deleted')
// }
const customer = new mongoose.Schema({
    // custID: {
    //     type: String,
    //     required: true
    // },
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
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    feedbackChat: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    chatbotChat: [
        chatbotMsgObj
    ],
    notifications: [
        {
            type: String,
            required: false
        }
    ]

})

module.exports = mongoose.models.Customer || mongoose.model('Customer', customer) 