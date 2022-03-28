const express = require('express');
const modelController = require('../../controller/common/modelController')
const router = express.Router();


router.get('/', modelController.modelsGet)
router.post('/', modelController.modelPost)
router.get('/:id', modelController.modelGet)
router.put('/:id', modelController.modelPut)
router.delete('/:id', modelController.modelDelete)

module.exports = router