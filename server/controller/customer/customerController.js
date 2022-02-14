const customerSchema = require('../../models/customer/customerSchema');



const customersGet = (req,res,next) => {
    customerSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const customerPost = (req,res,next) => {
    customerSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const customerPut = (req,res,next) => {
    customerSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        customerSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const customerDelete = (req,res,next) => {
    customerSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const customerGet = async (req, res) => {
    customerSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    customersGet,
    customerPost,
    customerPut,
    customerDelete,
    customerGet
}