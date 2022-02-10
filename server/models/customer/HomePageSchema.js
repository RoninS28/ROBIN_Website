const mongoose = require('mongoose');



const HomePageSchema = new mongoose.Schema({
    carouselImages: [
        {
            type: String,
            required: true
        }
    ],
    footerImage: {
        type: String,
        required: true
    },
    bodyImage: {
        type: String,
        required: true
    },
    titleMsgs: [
        {
            type: String,
            required: true
        }
    ],
    linkMsgs: [
        {
            type: String,
            required: true
        }
    ]

})

module.exports = mongoose.model('HomePageSchema', HomePageSchema)