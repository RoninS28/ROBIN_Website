const mongoose=require('mongoose');
// const bcrypt = require('bcryptjs')

// const jwt = require('jsonwebtoken');

const updateBatchSchema= new mongoose.Schema({
    BatchId: String, 
    stages:[
               {stageno: Number, description: String, updateddate: String}
            ]
   
})


const Updatebatch = mongoose.model('updatebatch',updateBatchSchema);
module.exports = Updatebatch;
