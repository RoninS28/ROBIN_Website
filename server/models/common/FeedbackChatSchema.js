const mongoose = require('mongoose')

const feedbackMsgObj = require('../common/FeedbackChatMsgObj')


const serviceCentreChatSchema = new mongoose.Schema({
    // id of this document would be in the service centre as well as customer profile docuents
    custID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    adminID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    chat: [
        feedbackMsgObj
    ]
})


module.exports = mongoose.model('FeedbackChat', serviceCentreChatSchema)