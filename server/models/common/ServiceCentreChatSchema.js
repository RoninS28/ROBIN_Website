const mongoose = require('mongoose')

const serviceCentreMsgObj = require('../common/ServiceCentreChatMsgObj')//d

const serviceCentreChatSchema = new mongoose.Schema({
    // id of this document would be in the service centre as well as customer profile docuents
    custID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    serviceCentreID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    chat: [
        serviceCentreMsgObj
    ]
})


module.exports = mongoose.model('ServiceCentreChat', serviceCentreChatSchema)