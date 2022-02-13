const express = require('express');
// const stageController = require('../../controller/customer/stageController')
const router = express.Router();
const Model = require('../../models/common/ModelSchema')

router.post('/post', (req, res) => {
    const newmodel = Model({
        modelID: 'M1362',
        modelName: 'PATRIOT',
        releaseDate: Date.now(),
        waitingPeriod: 45,
        price: 68000

    })
    newmodel.save()
        .then((result) => {
            console.log('saved')
        })
        .then((result1) => {
            res.redirect('/')
        })

})

// fetch all the products

router.get('/', (req, res) => {
    Model.find().sort({ createdAt: -1 })
        .then((result) => {
            res.send(result)
        })
        .catch(next)

})


// for a particular id, show a detailed page

router.get('/:id', async (req, res) => {
    console.log(req.params.id)

    const model = await Model.findOne({ modelID: req.params.id })
    if (model) {
        console.log('found')
        console.log(model)
        res.send(model)
    }
    else {
        res.status(404).redirect('/products')
    }
})
module.exports = router