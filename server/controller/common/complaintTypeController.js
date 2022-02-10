const complaintTypeSchema = require('../../models/common/complaintTypeSchema');



const complaintTypesGet = (req,res,next) => {
    complaintTypeSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const complaintTypePost = (req,res,next) => {
    complaintTypeSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const complaintTypePut = (req,res,next) => {
    complaintTypeSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        complaintTypeSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const complaintTypeDelete = (req,res,next) => {
    complaintTypeSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const complaintTypeGet = async (req, res) => {
    complaintTypeSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    complaintTypesGet,
    complaintTypePost,
    complaintTypePut,
    complaintTypeDelete,
    complaintTypeGet
}