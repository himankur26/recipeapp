const cloudinary = require("cloudinary").v2
const fs = require("fs")
cloudinary.config({
   cloud_name : "dea40uwoc",
   api_key:"329568547694655",
   api_secret:"EwzfJKaac4ULl0NT1D6s3X_0yt0" ,

})
const uploadFile = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        const result = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        fs.unlinkSync(localFilePath)
        return result
    } catch (error) {
        console.log(error)
        fs.unlinkSync(localFilePath)
        return null
    }
}
module.exports =  uploadFile