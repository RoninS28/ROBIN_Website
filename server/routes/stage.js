const express = require('express');
const stageController = require('../controller/stageController')
const router = express.Router();


router.get('/', stageController.stagesGet)

router.post('/', stageController.stagePost)
router.get('/:id', stageController.stageTest)
router.patch('/:id', stageController.stagePatch)
router.delete('/:id', stageController.stageDelete)

module.exports = router