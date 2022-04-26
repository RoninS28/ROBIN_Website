const express = require('express');
const router = express.Router();
const mlModelController = require('../../controller/mlmodel/mlModelController');

router.post('/', mlModelController.predict);

module.exports = router