const outletSchema = require('../../models/outlet/outletSchema');



const outletsGet = (req,res,next) => {
    outletSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const outletPost = (req,res,next) => {
    outletSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const outletPut = (req,res,next) => {
    outletSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        outletSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const outletDelete = (req,res,next) => {
    outletSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const outletGet = async (req, res) => {
    outletSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    outletsGet,
    outletPost,
    outletPut,
    outletDelete,
    outletGet
}