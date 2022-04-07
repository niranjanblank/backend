
const {FoodItem} = require('../models')

const {Restaurant} = require('../models')

// add food item
const createFoodItem = async (req,res) => {
    let imagePath = req.file.path.split("\\")
    let image = 'http://localhost:5000/'+imagePath.splice(1).join('/')
    console.log(image)
    console.log(req.body)
 
  
    const { restaurantId, foodName, foodPrice} = req.body
    
    try{
    
        
    const restro = await Restaurant.findByPk(restaurantId)
    const food = await FoodItem.create({
                restaurant_id: restro.id,
                foodName: foodName,
                foodPrice: foodPrice,
                image : image 
                })
                
    res.json({data: food,
                message: 'food item created'})
            }
    catch(error){
        res.json({data: null,
        message: error.message})
    }
}

const getAllFoodItems= async (req,res) => {

    try{
        const foodItemData = await FoodItem.findAll()
        res.json({
            data: foodItemData,
            message: 'food items retrieved'
        })
    }
    catch(error){
        res.json({
            data: null,
            message: error.message
        })
    }
}

exports.createFoodItem = createFoodItem
exports.getAllFoodItems = getAllFoodItems