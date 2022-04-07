const express = require('express')
const multer = require('multer')
const foodItemController = require('../controllers/foodItemController')

const router = express.Router()

// configuration for storing the image
const storage = multer.diskStorage({
    destination: function(req,file, cb){
        cb(null ,'./public/fooditems')
    },
    filename : function(req,file,cb){
        cb(null ,Date.now() + file.originalname)
    }
})

const upload = multer({
    storage: storage
    })

router.post('/',upload.single('image'), foodItemController.createFoodItem)
router.get('/', foodItemController.getAllFoodItems)
module.exports = router