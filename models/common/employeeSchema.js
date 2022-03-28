const mongoose = require('mongoose');

const employeeSchema=new mongoose.Schema({
   name: {
       type: String,
       required: true
   },
   contact: {
    type: Number,
    required: true
    },
    emailID: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    position: { //position table required?
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    dateOfJoin: {
        type: Date,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    adharNumber: {
        type: Number,
        required: true
    },
    panNumber: {
        type: Number,
        required: true
    },
    workingAt: {  //outlet, service center,  or factory
        type: String,
        required: true
    }
})

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;