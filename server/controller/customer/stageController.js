const express = require('express');
const stageSchema = require('../../models/customer/stageSchema');

const stagesGet = async (req, res) => {
    try {

        // fetch all the stageSchemas from db and send 
        const stages = await stageSchema.find();
        res.json(stages);
        res.render()

    } catch (err) {
        res.send('Err: ', err);
    }
}

const stagePost = async (req, res) => {

    const stageObj = new stageSchema({
        name: req.body.name,
        description: req.body.description,
        stageId: req.body.stageId
    });
    // const stageSchema = new stageSchema({
    //     name: "Prathamesh",
    //     tech: "NodeJS"
    // })
    try {
        const a1 = await stageObj.save();

        res.json(a1);

    } catch (err) {
        res.send(err)
    }
}


const stagePatch = async (req, res) => {
    try {
        const stage = await stageSchema.findById(req.params.id);
        stage.sub = req.body.sub;
        const a1 = await stage.save();
        res.json(a1);
    } catch (err) {
        res.send('Error')
    }
}


const stageDelete = async (req, res) => {
    try {
        const stage = await stageSchema.findById(req.params.id);
        const a1 = await stage.remove();
        res.json(a1);
    } catch (err) {
        res.send('Error')
    }
}

const stageTest = async (req, res) => {
    try {
        const stage = await stageSchema.findById(req.params.id);
        // const a1 = await stage.remove();
        res.json(stage);
    } catch (err) {
        res.send('Error')
    }
}


module.exports = {
    stagesGet,
    stagePost,
    stagePatch,
    stageDelete,
    stageTest
}