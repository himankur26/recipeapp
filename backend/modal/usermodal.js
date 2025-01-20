const mongoose = require("mongoose")
const bcrypt = require ('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:[true,"please enter the name"]
    },
    email :{
        type:String,
        required:[true,"please enter email "]
    },
    phone :{
        type:String,
        required:[true,"please enter your phone"]
    },
    password :{
        type:String,
        required:[true,"please enter a password "]
    },
    role :{
        type:String,
        default: "user"
    }
},{Timestamp:true})

//creating custom middleware for bcrypting the password
userSchema.pre("save", async function(next) {
    console.log("pre data ", this)
    if(!this.isModified("password")){
        return next()
    }
    const user = this
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password ,saltRounds)
    user.password = hashedPassword
})

//middleware for jwt
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userID:this._id.toString(),
            email:this.email,
            role : this.role
        },
        process.env.JWT_SECRET_KEY ,
        {
            expiresIn:"30d"
        })
    } catch (error) {
        console.log(error)
        throw new Error("failed to generate token")
    }
}

module.exports = mongoose.model('User',userSchema)
