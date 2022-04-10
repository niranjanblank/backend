const express = require('express')
const adminUserController = require('../controllers/adminUserController')

const router = express.Router()


router.route('/login').post(adminUserController.loginAdmin)

module.exports = router  