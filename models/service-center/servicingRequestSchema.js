const mongoose = require('mongoose');




const serviceRequestSchema = new mongoose.Schema({
    serviceID: {
        type: String,
        required: true
    },
    custID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    serviceCentreID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    timeSlot: {
        type: String,
        required: true
    },
    appointmentDate: {
        type: String,
        required: true
    },
    personalNotes: {
        type: String,
        required: true
    },
    pickupDrop: {
        type: String,
        required: true
    }

})

const Services = mongoose.model('ServiceRequest', serviceRequestSchema);
module.exports = Services;

