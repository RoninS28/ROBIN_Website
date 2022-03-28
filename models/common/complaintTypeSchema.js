const mongoose = require('mongoose');

const complaintTypeSchema=new mongoose.Schema({
   type: {
       type: String,
       required: true
   },
})

const ComplaintType = mongoose.model('ComplaintType', complaintTypeSchema);
module.exports = ComplaintType;