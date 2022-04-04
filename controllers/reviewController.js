const {Review, User} = require('../models')



const getAllReviews = async (req,res) => {
    
    try{
        const reviewData = await Review.findAll() 
        res.json({
            data: reviewData,
            message: 'review data retrieved'
        })
    }
    catch(error) {
        res.json({
            data: null,
            message: error.message
        })
    }
}

// for getting all restaurant reviews by restaurant id
const getReviewByRestaurant= async (req,res)=> {
    
    const {restaurantId} = req.body

    try{
        const reviewData = await Review.findAll({restaurant_id:restaurantId})
        res.json({
            data: reviewData,
            message: 'review data retrieved'
        })
    }
    catch(error) {
        res.json({
            data: null,
            message: error.message
        })
    }

}

// adding reviews to restaurant
const addReview = async (req,res)=> {
    const {email,restaurantId,reviewText,reviewTime} =  req.body
        try{
            const user = await User.findOne({ where: { email: email} })

            const reviewData = await Review.create({
                user_id: user.id,
                restaurant_id: restaurantId,
                reviewText: reviewText,
                reviewTime: reviewTime
            })

            res.json({
                data: reviewData,
                message: 'review added'
            })

        }
        catch(error){
            res.json({
                data: null,
                message: error.message
            })
        }

}

exports.getReviewByRestaurant = getReviewByRestaurant
exports.addReview = addReview

exports.getAllReviews = getAllReviews

