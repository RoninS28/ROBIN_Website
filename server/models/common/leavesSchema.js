const mongoose = require('mongoose');
const { Schema } = mongoose;

const leavesSchema=new mongoose.Schema({
   employee: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    leaveType: { //sick or casual
        type: String,
        required: true,
    },
    status: { //granted or not
        type: String,
        required: true
    },
    from: {
        type: Date,
        required: true
    },
    to: {
        type: Date,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }

})

const Leaves = mongoose.model('Leaves', leavesSchema);
module.exports = Leaves;