const express = require('express');
const factorySchema = require('../../models/factory/factorySchema');



const factoriesGet = (req,res,next) => {
    factorySchema.find({}).then(function(data){
        res.send(data);
    }).catch(next);
}

const factoryPost = (req,res,next) => {
    factorySchema.create(req.body).then(function(data){
        res.send(data);
    }).catch(next);
}

const factoryPut = (req,res,next) => {
    factorySchema.findOneAndUpdate({_id: req.params.id},{$set: req.body}).then(function(data){
        factorySchema.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        });
    });
}

const factoryDelete = (req,res,next) => {
    factorySchema.findOneAndDelete({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}

const factoryGet = async (req, res) => {
    factorySchema.findOne({_id: req.params.id}).then(function(data){
        res.send(data);
    });
}


module.exports = {
    factoriesGet,
    factoryPost,
    factoryPut,
    factoryDelete,
    factoryGet
}