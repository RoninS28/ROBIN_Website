const express = require('express');
const complaintsController = require('../../controller/common/complaintsController')
const router = express.Router();


router.get('/', complaintsController.complaintsGet)
router.post('/', complaintsController.complaintPost)
router.get('/:id', complaintsController.complaintGet)
router.put('/:id', complaintsController.complaintPut)
router.delete('/:id', complaintsController.complaintDelete)

module.exports = router