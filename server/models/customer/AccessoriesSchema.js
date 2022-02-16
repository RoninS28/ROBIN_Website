// const mongoose = require('mongoose');

const accessoryObj = {
    accessoryID: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    discountAmt: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
}

module.exports = accessoryObj