const express = require('express');
const stageSchema = require('../models/stageSchema');
const router = express.Router();

router.get('/', async(req, res) => {
    try {

        // fetch all the stageSchemas from db and send 
        const stages = await stageSchema.find();
        res.json(stages);

    }catch(err) {
        res.send('Err: ', err);
    }
})

router.post('/', async(req, res) => {

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

    }catch(err) {
        res.send(err)
    }
})
router.patch('/:id', async(req, res) => {
    try {
        const stage = await stageSchema.findById(req.params.id);
        stage.sub = req.body.sub;
        const a1 = await stage.save();
        res.json(a1);
    } catch(err) {
        res.send('Error')
    }
})
router.delete('/:id', async(req, res) => {
    try {
        const stage = await stageSchema.findById(req.params.id);
        const a1 = await stage.remove();
        res.json(a1);
    } catch(err) {
        res.send('Error')
    }
})

module.exports = router