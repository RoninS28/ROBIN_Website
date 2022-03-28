const mongoose = require('mongoose');

const servicesSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    }

})

const Services = mongoose.model('Services', servicesSchema);
module.exports = Services;

