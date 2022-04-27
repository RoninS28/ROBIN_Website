const mongoose=require('mongoose');
// const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');
//accid,name,price,company,image

const buyAccSchema= new mongoose.Schema({
    orderid: String, 
    buyitems:[
               {accid: String, name: String, price: Number, company: String, image: String, qty:Number, totalprice: Number}
            ]
})


const Buyaccessory = mongoose.model('BUYACCESSORY',buyAccSchema);
module.exports = Buyaccessory;

