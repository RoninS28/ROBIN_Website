// const mongoose = require('mongoose');

const feedbackMsgObj = {
    msgID: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    },
    custreadToggle: {//true if read by customer
        type: Boolean,
        required: true
    },
    adminreadToggle: {//true if read by the admin checking the feedback msgs
        type: Boolean,
        required: true
    },
    msgType: {//type of msg eg related to reminder/servicng etc
        type: String,
        required: true
    }
}

module.exports = feedbackMsgObj