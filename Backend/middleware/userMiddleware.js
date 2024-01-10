const jwt = require('jsonwebtoken');
const {User , Journey} = require('../Db/index')
require('dotenv').config();

const userMiddleware = async (req,res,next)=>{
    try {
        const token = req.headers.authorization;
    if(token){
        const user = jwt.verify(token,process.env.JWT_SECRET);
        if(user){
            const userData = await User.findOne({username: user})
            req.user = userData;
            next();
        }
        else{
            res.json({
                message: "Invalid token"
            })
        }
    }
    else{
        console.log("hello")
        res.json({
            message: "Token not found"
        })
    }
    } catch (error) {
        res.json({
            message: "some error occured"
        })
    }
}

module.exports = {
    userMiddleware
}