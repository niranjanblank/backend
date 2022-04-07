const {CartItem, User, Cart} = require("../models")

const getCartItemByCartId = async (req,res) => {
    const {cartId} = req.params

    try{
        const cartItemData = await CartItem.findAll({where: {cart_id: cartId}})
        res.json({
            data: cartData,
            message: 'cart items retrieved'})
    }
    catch(error){
        res.json({
            data: null,
            message: error.message})
    }
}

const getCartItemByCartEmail = async (req,res) => {
    const {email} = req.body

    try{
        const user = await User.findOne({where: {email: email}})
        const cart = await Cart.findOne({where: {user_id: user.id}})
        const cartItemData = await CartItem.findAll({where: {cart_id:cart.id}})
        res.json({
            data: cartItemData,
            message: 'cart items retrieved'})
    }
    catch(error){
        res.json({
            data: null,
            message: error.message})
    }
}

const createCartItem = async (req,res)=> {
    const {cartId,foodItemId} = req.body
    
    try {
        const cartItemData = await CartItem.create({cart_id:cartId,food_item_id:foodItemId})

        res.json({
            data: cartItemData,
            message: 'cart item data created'})
    }
    catch (error){
        res.json({
            data: null,
            message: error.message})
    }
}

const deleteCartItem = async (req,res)=> {
    const {cartItemId} = req.body
    console.log(cartItemId)
    try{
        const deletedData  = await CartItem.destroy({where:{id:cartItemId}})

        res.json({
            data: deletedData,
            message: 'Data deleted'
        })
    }
    catch(error){
        res.json({
            data: null,
            message: error.message
        })
    }
    
    
}

const emptyCartItem = async (req,res) => {
    const {cartId} = req.body
 
    try{
        const deletedData  = await CartItem.destroy({where:{cart_id:cartId}})

        res.json({
            data: deletedData,
            message: 'Data deleted'
        })
    }
    catch(error){
        res.json({
            data: null,
            message: error.message
        })
    }
    
}

exports.createCartItem = createCartItem
exports.deleteCartItem = deleteCartItem
exports.emptyCartItem = emptyCartItem
exports.getCartItemByCartId = getCartItemByCartId
exports.getCartItemByCartEmail = getCartItemByCartEmail