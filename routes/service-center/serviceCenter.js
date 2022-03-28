const express = require('express');
const serviceCenterController = require('../../controller/service-center/serviceCenterController')
const router = express.Router();


router.get('/', serviceCenterController.serviceCentersGet)
router.post('/', serviceCenterController.serviceCenterPost)
router.get('/:id', serviceCenterController.serviceCenterGet)
router.put('/:id', serviceCenterController.serviceCenterPut)
router.delete('/:id', serviceCenterController.serviceCenterDelete)

module.exports = router