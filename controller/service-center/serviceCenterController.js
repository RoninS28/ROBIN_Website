const serviceCenterSchema = require('../../models/service-center/serviceCenterSchema');



const serviceCentersGet = (req,res,next) => {
    serviceCenterSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const serviceCenterPost = (req,res,next) => {
    serviceCenterSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const serviceCenterPut = (req,res,next) => {
    serviceCenterSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        serviceCenterSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const serviceCenterDelete = (req,res,next) => {
    serviceCenterSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const serviceCenterGet = async (req, res) => {
    serviceCenterSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    serviceCentersGet,
    serviceCenterPost,
    serviceCenterPut,
    serviceCenterDelete,
    serviceCenterGet
}