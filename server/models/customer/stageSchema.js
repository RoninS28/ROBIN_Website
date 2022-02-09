const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
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
            type: URL //can change it to object

        }
    ]

})

const Stage = mongoose.model('Stage', stageSchema);
module.exports = Stage;

