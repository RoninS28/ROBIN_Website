const mongoose = require('mongoose');

const chatbotSchema = new mongoose.Schema({
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
            // todo make it as messagecategory schema if needed
            type: String,
            required: true

        }
    ]
})

module.exports = mongoose.model('ChatbotMsg', chatbotSchema)