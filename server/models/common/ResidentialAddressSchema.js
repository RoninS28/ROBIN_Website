const mongoose = require('mongoose');

const address = new mongoose.Schema({
    flatNo: {
        type: String,
        required: true
    },
    buildingName: {
        type: String,
        required: true
    },
    residencyName: {
        type: String,
        required: false
    },
    streetName: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    area: {
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
    }
})

module.exports = mongoose.model('ResidentialAddress', address)