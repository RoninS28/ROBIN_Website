const mongoose = require('mongoose');

const stageSchema=new mongoose.Schema({
    stageId: {
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
    }
})

const Stage = mongoose.model('Stage', stageSchema);
module.exports = Stage;

