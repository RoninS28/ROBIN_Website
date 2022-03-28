const express = require('express');
const stockRequestController = require('../../controller/common/stockRequestController')
const router = express.Router();


router.get('/', stockRequestController.stockRequestsGet)
router.post('/', stockRequestController.stockRequestPost)
router.get('/:id', stockRequestController.stockRequestGet)
router.put('/:id', stockRequestController.stockRequestPut)
router.delete('/:id', stockRequestController.stockRequestDelete)

module.exports = router