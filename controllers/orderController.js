const {Order, User} = require('../models')
const { v4: uuidv4 } = require('uuid');
const createOrder = async (req,res) => {
    const {email,data,orderTime} = req.body
    const uuid = uuidv4()
    const userData = await User.findOne({where: {email: email}})
    for (let i = 0; i < data.length; i++){
        await Order.create({user_id: userData.id,food_item_id: data[i].food_item_id,uuid: uuid, order_time: orderTime})
    }
   
    res.json({
        data: [],
        message: 'completed'
    })

}

const getAllOrders = async (req,res) => {
    const orderData = await Order.findAll()
    const orderDataRestructured = []
    let prevUUID = orderData[0].uuid
    let newArray = []

    for(let i =0; i<orderData.length;i++){
        if(orderData[i].uuid===prevUUID){
            newArray.push(orderData[i])
        }
        else{
            orderDataRestructured.push(newArray)
            newArray=[]
            newArray.push(orderData[i])
            prevUUID = orderData[i].uuid
            
        }
        if(i===(orderData.length-1)){
            orderDataRestructured.push(newArray)
        }
    }

    console.log('restruc',orderDataRestructured.length)
    res.json({
        data: orderDataRestructured,
        message: 'completed'
    })
}

exports.createOrder = createOrder
exports.getAllOrders = getAllOrders