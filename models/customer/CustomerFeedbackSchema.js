const mongoose = require('mongoose');

const customerFeedbackSchema = new mongoose.Schema({
    custID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    feedbackMsg: {
        type: String,
        required: true
    },
    feedbackDate: {
        type: Date,
        required: true
    }

})

module.exports = mongoose.model('customerfeedback', customerFeedbackSchema)