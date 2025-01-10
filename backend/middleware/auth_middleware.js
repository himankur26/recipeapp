const jwt = require('jsonwebtoken')
const user = require('../modal/usermodal')
const authMiddleware = async(req,res,next)=>{
const token = req.header('Authorization')
if(!token){
    return res.status(401).json({message:"unauthorized token"})
}
const jwtToken = token.replace('Bearer',"").trim()
try {
    const isVerfied = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)
    const userData =await user.findOne({email:isVerfied.email}).select({password:0})
    console.log(userData)
    if(!userData){
        return res.status(404).json({message:"user not found"})
    }
    req.user = userData
    req.token = token
    req.userId = userData._id 
    next()
} catch (error) {
    console.log(error)
    return res.status(401).json({message:"unauthorized token"})

} 
}

module.exports = authMiddleware;