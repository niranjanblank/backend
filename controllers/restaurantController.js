const {Restaurant} = require('../models/')

const getAllRestaurantData = async (req,res) => {
    try{
        const restaurantData = await Restaurant.findAll()
        res.json({
            data: restaurantData,
            message: 'Data retrieved'
        })
    }
    catch(error){
        res.json({data:null,
                message:error.message})
    }

}

exports.getAllRestaurantData = getAllRestaurantData