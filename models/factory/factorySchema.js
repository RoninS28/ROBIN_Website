const mongoose = require('mongoose');

const factorySchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    fax: {
        type: String,
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    dateOfEstablishment: {
        type: String,
    },
    licenceNo: {
        type: String,
    },
    active: {
        type: Boolean,
        required: true
    }
})

const Factory = mongoose.model('Factory', factorySchema);
module.exports = Factory;

