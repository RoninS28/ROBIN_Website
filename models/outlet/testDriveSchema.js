const mongoose = require('mongoose');
//const { Schema } = mongoose;

const testDriveSchema=new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: 'Customer',
        required: true
      },
    date: {   
        type: Date,
        required: true,
        default: Date.now
    },
    time: {   
        type: String,
        required: true,
    },
    model: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: 'EVModel',
        required: true
    },
    address: {  //home or outlet
        type: String,
        required: true
    },
    outlet: {
        type: mongoose.Schema.Types.ObjectId,
        // ref: 'Outlet',
        required: true 
    },
    contact: {
        type: String,
        required: true 
    },
    pincode: {
        type: String, 
        required: true
    },
    dob: {
        type: String,  
        required: true
    },
    name: {
        type: String,  
        required: true
    }
})

const TestDrive = mongoose.model('TestDrive', testDriveSchema);
module.exports = TestDrive;