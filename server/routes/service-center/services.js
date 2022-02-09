const express = require('express');
const servicesController = require('../../controller/service-center/servicesController')
const router = express.Router();


router.get('/', servicesController.serviceCentersGet)
router.post('/', servicesController.serviceCenterPost)
router.get('/:id', servicesController.serviceCenterGet)
router.put('/:id', servicesController.serviceCenterPut)
router.delete('/:id', servicesController.serviceCenterDelete)

module.exports = router