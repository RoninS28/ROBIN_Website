const express = require('express');
const outletController = require('../../controller/outlet/outletController')
const router = express.Router();


router.get('/', outletController.outletsGet)
router.post('/', outletController.outletPost)
router.get('/:id', outletController.outletGet)
router.put('/:id', outletController.outletPut)
router.delete('/:id', outletController.outletDelete)

module.exports = router