const complaintsSchema = require('../../models/common/complaintsSchema');



const complaintsGet = (req,res,next) => {
    complaintsSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const complaintPost = (req,res,next) => {
    complaintsSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const complaintPut = (req,res,next) => {
    complaintsSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        complaintsSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const complaintDelete = (req,res,next) => {
    complaintsSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const complaintGet = async (req, res) => {
    complaintsSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    complaintsGet,
    complaintPost,
    complaintPut,
    complaintDelete,
    complaintGet
}