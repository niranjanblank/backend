
const {FoodItem} = require('../models')

const {Restaurant} = require('../models')

// add food item
const createFoodItem = async (req,res) => {
    const { restaurantId, foodName, foodPrice, image} = req.body
    
    try{
    
        
    const restro = await Restaurant.findByPk(restaurantId)
    const food = await FoodItem.create({
                restaurant_id: restro.id,
                foodName: foodName,
                foodPrice: foodPrice,
                image :'some image'  
                })
                
    res.json({data: food,
    message: 'food item created'})
            }
    catch(error){
        res.json({data: null,
        message: error.message})
    }
}

exports.createFoodItem = createFoodItem