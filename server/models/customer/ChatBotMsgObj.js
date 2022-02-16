const mongoose = require('mongoose');

const chatbotObj = {
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
    msgCategories: [
        {
            // todo make it as messagecategory Obj if needed
            type: String,
            required: true

        }
    ]
}

module.exports = chatbotObj