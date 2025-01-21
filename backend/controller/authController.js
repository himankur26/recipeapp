const db = require("../modal/usermodal")
const bcrypt = require ('bcryptjs')

module.exports = {
    createUser: async (req,res) =>{
        try {
            const {name,email,phone,password,role} = req.body
            const existingUser = await db.findOne({email:req.body.email})
            if(existingUser){
                return  res.status(400).json({
                    success:false,
                    status:400,
                    message:"email already exist",
                
                })
            }
            const user = await db.create({
                name,email,phone,password,role
                
            }) 
            res.status(200).json({
                success:true,
                status:200,
                message:"user created",
                body : user,
                token: await user.generateToken(),
                userID:user._id.toString()
            })
        } catch (error) {
            console.log(error)
        }
    },
       // user login logic
       loginUser:async (req,res)=>{
        try {
            const {email,password} = req.body
            const userExist = await db.findOne({email}).select("+password")
            if(!userExist){
                return  res.status(400).json({
                    success:false,
                    status:400,
                    message:"user not exist",
                
                })
            }
            const isPassMatch = await bcrypt.compare(
                password,
                userExist.password
            )
            
           if (isPassMatch) {
            const token = await userExist.generateToken() 
            return  res.status(200).json({
                success:true,
                status:200,
                message:"Logined successful",
                token:token,
                userID:userExist._id.toString(),
            })
           } 
           else {
            return  res.status(400).json({
                success:false,
                status:400,
                message:" invalid credentials",
            
            })
           }
        } catch (error) {
            console.log(error)
        }
    },
     // currect user logic
     currentUser:async (req,res)=>{
        try {
            const userData = req.user
            console.log(userData)
            return res.status(200).json({userData})
        } catch (error) {
            console.log(error)
        }
    }
}