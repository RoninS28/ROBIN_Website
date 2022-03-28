// const mongoose = require('mongoose');

const stageObj = {
    stageID: {//stage number
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: [
        {
            type: String //can change it to object

        }
    ]

}

module.exports = stageObj;

