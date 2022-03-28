const ModelSchema = require('../../models/common/ModelSchema');



const modelsGet = (req,res,next) => {
    ModelSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const modelPost = (req,res,next) => {
    ModelSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const modelPut = (req,res,next) => {
    ModelSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        ModelSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const modelDelete = (req,res,next) => {
    ModelSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const modelGet = async (req, res) => {
    ModelSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    modelsGet,
    modelPost,
    modelPut,
    modelDelete,
    modelGet
}