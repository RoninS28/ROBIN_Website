const stockRequestSchema = require('../../models/common/stockRequestSchema');



const stockRequestsGet = (req,res,next) => {
    stockRequestSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const stockRequestPost = (req,res,next) => {
    stockRequestSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const stockRequestPut = (req,res,next) => {
    stockRequestSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        stockRequestSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const stockRequestDelete = (req,res,next) => {
    stockRequestSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const stockRequestGet = async (req, res) => {
    stockRequestSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    stockRequestsGet,
    stockRequestPost,
    stockRequestPut,
    stockRequestDelete,
    stockRequestGet
}