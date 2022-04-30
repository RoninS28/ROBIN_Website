const mongoose=require('mongoose');
// const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');
//accid,name,price,company,image

const addToCartSchema= new mongoose.Schema({
    accid:{
        type: String,
        unique : true,
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
    company:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },    
    qty:{
        type:Number,
        required: true
    },
    totalprice:{
        type:Number,
        required: true
    },
   
})



const Mycart = mongoose.model('MYCART',addToCartSchema);
module.exports = Mycart;

