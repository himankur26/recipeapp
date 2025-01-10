const db = require("../modal/recipemodal")
const uploadFile = require('../cloudinary/Cloudinary')

module.exports = {
    createRecipe: async (req, res) => {
        try {
            const recipeImageLocalPath = req.file?.path; // Change from req.files to req.file
            if (!recipeImageLocalPath) {
                return res.status(400).json({
                    message: "Recipe image is required",
                });
            }
            console.log(recipeImageLocalPath, "Image is being uploaded");
            const recipeImage = await uploadFile(recipeImageLocalPath);
            if (!recipeImage) {
                return res.status(500).json({
                    message: "Failed to upload to Cloudinary",
                });
            }
            const { title, ingredients, instructions, prepTime, createdBy } = req.body;
            const image = recipeImage.url;
            const recipe = await db.create({
                title,
                ingredients,
                instructions,
                prepTime,
                image,
                createdBy,
            });
    
            res.status(200).json({
                success: true,
                status: 200,
                message: "Recipe created",
                body: recipe,
            });
        } catch (error) {
            console.log(error);
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