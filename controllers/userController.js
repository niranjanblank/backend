const {User} = require('../models/')
const _ = require('lodash')
const bcrypt = require('bcrypt')

// create a user
const signUp = async (req,res) => {
    let { email, password, lastName, firstName } = req.body    
    try{
        // adds new user
        const user = await User.create({firstName: firstName, lastName: lastName,email: email, password: password})
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
            data: [],
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
    // limit = number of data to take
    // offset = number of data to skip
    const {limit=10, offset=1} = req.query
    try{
        const userData = await User.findAll({
            attributes: {exclude: ['password']},
            limit:limit,
            offset: (offset-1)*limit
        })
        res.json({
            data: userData,
            message: "Data successfully retrieved"
        })
    }
    catch(error){
        res.json({
            data: [],
            error: error.message
        })
    } 
}





exports.signUp = signUp
exports.login = login

exports.getAllUser = getAllUser