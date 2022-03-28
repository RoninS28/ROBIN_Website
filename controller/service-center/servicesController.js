const servicesSchema = require('../../models/service-center/servicesSchema');



const serviceCentersGet = (req,res,next) => {
    servicesSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const serviceCenterPost = (req,res,next) => {
    servicesSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const serviceCenterPut = (req,res,next) => {
    servicesSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        servicesSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const serviceCenterDelete = (req,res,next) => {
    servicesSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const serviceCenterGet = async (req, res) => {
    servicesSchema.findOne({_id: req.params.id}).then(function(data){
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