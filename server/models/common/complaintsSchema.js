const mongoose = require('mongoose');
const { Schema } = mongoose;

const complaintsSchema=new mongoose.Schema({
   description: {
       type: String,
       required: true
   },
   complaintType: {
        type: Schema.Types.ObjectId,
        ref: 'ComplaintType',
        required: true
   },
   sourceType: {    //Employee or customer
       type: String,
       required: true
   },
   customerId: {
    type: Schema.Types.ObjectId,
    ref: 'Customer', 
    default: null
   },
   employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    default: null
   },
   status: {   //active, pending, handled
       type: String,
       required: true
   }
})

const Complaints = mongoose.model('Complaints', complaintsSchema);
module.exports = Complaints;