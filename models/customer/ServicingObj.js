const mongoose = require('mongoose');
const workdoneObj = require('./WorkDoneObj')

const servicingObj = {
    serviceID: {
        type: String,
        required: true
    },
    dateOfService: {
        type: Date,
        required: true
    },
    workDone: [
        workdoneObj
        // {
        //     type: String,
        //     required: true
        // }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    serviceCentreID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    personInCharge: {
        type: String,
        required: true
    }

}

module.exports = servicingObj