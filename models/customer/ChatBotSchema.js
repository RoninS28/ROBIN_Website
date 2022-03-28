const chatBotMsg = require('../../models/customer/ChatBotMsgObj')
const mongoose = require('mongoose');

const chatBotSchema = new mongoose.Schema({
    custID : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    messages : [
        chatBotMsg
    ]
})

module.exports = mongoose.model('chatbot' , chatBotSchema)