const {AdminUser} = require('../models')

const loginAdmin = async (req,res) => {
    let { email, password } = req.body 
    try {
        const user = await AdminUser.findOne({where: {email: email}})
        if(user){
            const match = password===user.password
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