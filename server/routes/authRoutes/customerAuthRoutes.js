const { Router } = require('express')
const custauthController = require('../../controller/authcontrollers/customerAuthController')

const router = Router()

// router.get('/signup', custauthController.signup_get)
router.post('/signup', custauthController.signup_post)
router.get('/login', custauthController.login_get)
router.post('/login', custauthController.login_post)
router.get('/logout', custauthController.logout_get)

module.exports = router