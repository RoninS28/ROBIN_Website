const express = require('express');
const factoryController = require('../../controller/factory/factoryController')
const router = express.Router();


router.get('/', factoryController.factoriesGet)
router.post('/', factoryController.factoryPost)
router.get('/:id', factoryController.factoryGet)
router.put('/:id', factoryController.factoryPut)
router.delete('/:id', factoryController.factoryDelete)

module.exports = router