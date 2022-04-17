const mongoose=require('mongoose');
// const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');

const addAccSchema= new mongoose.Schema({
    accid:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    comapany:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    specifications:{}
})



const Accessory = mongoose.model('ACCESSORY',addAccSchema);
module.exports = Accessory;





