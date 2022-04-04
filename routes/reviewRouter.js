const express = require('express')
const reviewController = require('../controllers/reviewController')

const router = express.Router()

router.post('/',reviewController.getReviewByRestaurant)
router.get('/',reviewController.getAllReviews)
router.post('/addReview',reviewController.addReview)

module.exports = router
