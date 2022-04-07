const express = require('express')
const cartItemController = require('../controllers/cartItemController')

const router = express.Router()


router.route('/:cartId').get(cartItemController.getCartItemByCartId)
router.route('/').post(cartItemController.createCartItem)
router.route('/getCart').post(cartItemController.getCartItemByCartEmail)
router.route('/').delete(cartItemController.deleteCartItem)
router.route('/emptyCart').delete(cartItemController.emptyCartItem)
module.exports = router