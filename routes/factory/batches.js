const express = require('express');
const factoryBatchController = require('../../controller/factory/factoryBatchController');
const router = express.Router();


router.get('/', factoryBatchController.factoryBatchesGet)
router.post('/', factoryBatchController.factoryBatchPost)
router.get('/:id', factoryBatchController.factoryBatchGet)
router.put('/:id', factoryBatchController.factoryBatchPut)
router.delete('/:id', factoryBatchController.factoryBatchDelete)

module.exports = router