const {User, Cart} = require('../models/')
const _ = require('lodash')
const bcrypt = require('bcrypt')

// create a user
const signUp = async (req,res) => {
    let { email, password, lastName, firstName } = req.body    
    try{
        // adds new user
        const user = await User.create({firstName: firstName, lastName: lastName,email: email, password: password})
        if(user){
            const cart = await Cart.create({user_id: user.id})
        }
        user_data_to_return = {email: user.email}
        res.json({
            data: user_data_to_return,
            message: "User successfully created"
        }
            )
    }
    
    catch(error){
        // sends error message if there arises some message
        res.json({
            data: null,
            message:error.message
        })
    }
    
}

const login = async (req,res) => {
    let { email, password } = req.body 
    try {
        const user = await User.findOne({where: {email: email}})
        if(user){
            const match = await bcrypt.compare(password, user.password);
            if(match){
                res.json({
                    data:true,
                    message: 'login success'
                    })
            }
            else{
                res.json({
                    data:false,
                    message: 'login failed'
                })
            }
        }
        else{
            res.json({
                    data: null,
                    message:'Incorrect Credentails'})
        }
    }
    catch(error){
        res.json(error.message)
    }
}

// get all user
const getAllUser = async (req,res) => {

 
    try{
        const userData = await User.findAll({
            attributes: {exclude: ['password']},
        })
        res.json({
            data: userData,
            message: "Data successfully retrieved"
        })
    }
    catch(error){
        res.json({
            data: null,
            error: error.message
        })
    } 
}




exports.signUp = signUp
exports.login = login

exports.getAllUser = getAllUser
