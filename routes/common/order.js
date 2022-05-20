const express = require('express');
const orderController = require('../../controller/common/orderController')
const router = express.Router();


router.get('/', orderController.ordersGet)
router.post('/', orderController.orderPost)
router.get('/:id', orderController.orderGet)
router.put('/:id', orderController.orderPut)
router.delete('/:id', orderController.orderDelete)

module.exports = router