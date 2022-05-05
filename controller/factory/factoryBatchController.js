const factoryBatchSchema = require('../../models/factory/updateBatchSchema');



const factoryBatchesGet = (req,res,next) => {
    factoryBatchSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const factoryBatchPost = (req,res,next) => {
    factoryBatchSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const factoryBatchPut = (req,res,next) => {
    factoryBatchSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        factoryBatchSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const factoryBatchDelete = (req,res,next) => {
    factoryBatchSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const factoryBatchGet = async (req, res) => {
    factoryBatchSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    factoryBatchesGet,
    factoryBatchPost,
    factoryBatchPut,
    factoryBatchDelete,
    factoryBatchGet
}