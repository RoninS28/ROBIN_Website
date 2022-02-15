const mongoose = require('mongoose');
const workdone = require('../customer/WorkDone')

const servicingSchema = new mongoose.Schema({
    serviceID: {
        type: String,
        required: true
    },
    dateOfService: {
        type: Date,
        required: true
    },
    workDone: [ 
        workdone
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    serviceCentreID: {
        type: String,
        required: true
    },
    personInCharge: {
        type: String,
        required: true
    }
   
})

module.exports = mongoose.model('ServicingSchema', servicingSchema)