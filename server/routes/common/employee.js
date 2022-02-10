const express = require('express');
const employeeController = require('../../controller/common/employeeController')
const router = express.Router();


router.get('/', employeeController.employeesGet)
router.post('/', employeeController.employeePost)
router.get('/:id', employeeController.employeeGet)
router.put('/:id', employeeController.employeePut)
router.delete('/:id', employeeController.employeeDelete)

module.exports = router