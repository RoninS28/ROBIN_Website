const orderSchema = require('../../models/factory/orderSchema');



const ordersGet = (req,res,next) => {
    orderSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const orderPost = (req,res,next) => {
    orderSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const orderPut = (req,res,next) => {
    orderSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        orderSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const orderDelete = (req,res,next) => {
    orderSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const orderGet = async (req, res) => {
    orderSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    ordersGet,
    orderPost,
    orderPut,
    orderDelete,
    orderGet
}