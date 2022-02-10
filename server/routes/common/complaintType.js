const express = require('express');
const complaintTypeController = require('../../controller/common/complaintTypeController')
const router = express.Router();


router.get('/', complaintTypeController.complaintTypesGet)
router.post('/', complaintTypeController.complaintTypePost)
router.get('/:id', complaintTypeController.complaintTypeGet)
router.put('/:id', complaintTypeController.complaintTypePut)
router.delete('/:id', complaintTypeController.complaintTypeDelete)

module.exports = router