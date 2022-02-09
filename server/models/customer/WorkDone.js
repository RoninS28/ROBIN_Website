const mongoose = require('mongoose');

const workDone = new mongoose.Schema({
    workID: {
        type: String,
        required: true
    },
    workName: {
        type: String,
        required: true
    },
    workDesc: {
        type: String,
        required: true
    },
    quantity: {//suppose oiling had to be done twice
        type: Number,
        required: true
    },
    discountAmt: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('WorkDone', workDone)