var express = require('express');
var router = express.Router();

var authController = require("../controller/authController")
var auth_middleware = require("../middleware/auth_middleware")

router.post("/createUser",authController.createUser)
router.post('/loginUser',authController.loginUser)
router.get('/currentUser',auth_middleware,authController.currentUser)

module.exports = router;
