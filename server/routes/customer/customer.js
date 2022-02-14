const express = require('express');
const customerController = require('../../controller/customer/customerController')
const router = express.Router();


router.get('/', customerController.customersGet)
router.post('/', customerController.customerPost)
router.get('/:id', customerController.customerGet)
router.put('/:id', customerController.customerPut)
router.delete('/:id', customerController.customerDelete)

module.exports = router