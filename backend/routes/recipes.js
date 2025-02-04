var express = require('express');
var router = express.Router();
const upload = require('../middleware/multer_middleware')


var recipeController = require("../controller/recipeController")
router.post("/createRecipe", 
    upload.fields([
        {
            name:"image",
            maxCount:1
        }
    ])    
,recipeController.createRecipe)
router.get('/getRecipes',recipeController.getRecipes)
router.get('/singleRecipe/:id',recipeController.singleRecipe)
router.get('/category/:category',recipeController.category)
router.get("/search", recipeController.search);


module.exports = router;
