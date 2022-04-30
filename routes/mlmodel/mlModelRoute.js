const express = require('express');
const router = express.Router();
const mlModelController = require('../../controller/mlmodel/mlModelController');

router.post('/', mlModelController.predict);
router.post('/evSales',mlModelController.evSales);

module.exports = router