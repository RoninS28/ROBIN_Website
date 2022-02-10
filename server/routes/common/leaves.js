const express = require('express');
const leavesController = require('../../controller/common/leavesController')
const router = express.Router();


router.get('/', leavesController.leavesGet)
router.post('/', leavesController.leavePost)
router.get('/:id', leavesController.leaveGet)
router.put('/:id', leavesController.leavePut)
router.delete('/:id', leavesController.leaveDelete)

module.exports = router