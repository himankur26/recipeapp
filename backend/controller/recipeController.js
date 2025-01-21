const db = require("../modal/recipemodal")
const uploadFile = require('../cloudinary/Cloudinary')

module.exports = {
    createRecipe: async (req, res) => {
        try {
            console.log("Request Files:", req.files); // Debugging
    
            // Ensure files exist
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: 'Recipe image is required' });
            }
    
            const recipeImageLocalPath = req.files.image[0].path // Use req.files[0]
            console.log(recipeImageLocalPath,"reeeeeeeeeeeeeeeeeeeeeeeee")
            console.log(recipeImageLocalPath, "Image is being uploaded");
    
            const recipeImage = await uploadFile(recipeImageLocalPath);
            if (!recipeImage) {
                return res.status(500).json({ message: 'Failed to upload image to Cloudinary' });
            }
    
            const recipe = await db.create({
                title: req.body.title,
                instructions: req.body.instructions,
                prepTime: req.body.prepTime,
                image: recipeImage.url,
            });
    
            res.status(200).json({
                success: true,
                status: 200,
                message: "Recipe created",
                body: recipe,
            });
        } catch (error) {
            console.log("Error creating recipe:", error);
            res.status(500).json({ message: "Server error" });
        }
    },
    
    
    getRecipes: async (req,res) => {
        try {   
            
            const recipes = await db.find({})
            res.status(200).json({
                status:200,
                success:true,
                message:"all recipes fetched",
                body: recipes
    
            })
        } catch (error) {
            console.log(error,"failed fetching recipes")
        }
    },
    singleRecipe: async (req,res) => {
        try {
            const product = await db.findById(req.params.id)
            if (!product) {
                return res.status(404).json({
                    message:"Recipe not found"
                })
            }
            res.status(200).json({
                status:200,
                success:true,
                message:"Recipe fetched",
                body:product
    
            })
        } catch (error) {
            console.log(error,"failed fetching recipe ")
        }
    }
    
}