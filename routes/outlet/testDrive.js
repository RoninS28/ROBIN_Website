const express = require('express');
const testDriveController = require('../../controller/outlet/testDriveController')
const router = express.Router();


router.get('/', testDriveController.testDrivesGet)
router.post('/', testDriveController.testDrivePost)
router.get('/:id', testDriveController.testDriveGet)
router.put('/:id', testDriveController.testDrivePut)
router.delete('/:id', testDriveController.testDriveDelete)

module.exports = router