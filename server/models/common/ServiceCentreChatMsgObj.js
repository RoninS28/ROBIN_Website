// const mongoose = require('mongoose');

const scentreChatMsgObj = {
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
    scentrereadToggle: {//true if read by service centre
        type: Boolean,
        required: true
    },
    msgType: {//type of msg eg related to reminder/servicng etc
        type: String,
        required: true
    }
}

module.exports = scentreChatMsgObj