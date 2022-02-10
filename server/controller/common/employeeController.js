const employeeSchema = require('../../models/common/employeeSchema');



const employeesGet = (req,res,next) => {
    employeeSchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const employeePost = (req,res,next) => {
    employeeSchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const employeePut = (req,res,next) => {
    employeeSchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        employeeSchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const employeeDelete = (req,res,next) => {
    employeeSchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const employeeGet = async (req, res) => {
    employeeSchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    employeesGet,
    employeePost,
    employeePut,
    employeeDelete,
    employeeGet
}