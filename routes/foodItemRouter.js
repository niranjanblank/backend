const express = require('express')
const foodItemController = require('../controllers/foodItemController')

const router = express.Router()

router.post('/', foodItemController.createFoodItem)
router.get('/', foodItemController.getAllFoodItems)
module.exports = router