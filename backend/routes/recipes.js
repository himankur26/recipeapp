var express = require('express');
var router = express.Router();
const upload = require('../middleware/multer_middleware')


var recipeController = require("../controller/recipeController")
//router.post("/createRecipe", upload.single('image'),recipeController.createRecipe)
router.get('/getRecipes',recipeController.getRecipes)
router.get('/singleRecipe/:id',recipeController.singleRecipe)


module.exports = router;
