const leavesSchema = require('../../models/common/leavesSchema');



const leavesGet = (req,res,next) => {
    leavesSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const leavePost = (req,res,next) => {
    leavesSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const leavePut = (req,res,next) => {
    leavesSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        leavesSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const leaveDelete = (req,res,next) => {
    leavesSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const leaveGet = async (req, res) => {
    leavesSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    leavesGet,
    leavePost,
    leavePut,
    leaveDelete,
    leaveGet
}