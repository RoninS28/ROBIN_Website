const mongoose = require('mongoose');
const { Schema } = mongoose;

const testDriveSchema=new mongoose.Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
      },
    datetime: {   
        type: Date,
        required: true,
        default: Date.now
    },
    model: {
        type: Schema.Types.ObjectId,
        ref: 'EVModel',
        required: true
    },
    location: {  //home or outlet
        type: String,
        required: true
    },
    outlet: {
        type: Schema.Types.ObjectId,
        ref: 'Outlet',
        required: true 
    },
    employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true 
    },
    feedback: {
        type: String, //in the form of description
        required: true
    },
    status: {
        type: String,  //pending or completed or ongoing
        required: true
    }
})

const TestDrive = mongoose.model('TestDrive', testDriveSchema);
module.exports = TestDrive;