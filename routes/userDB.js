var express = require('express');
var router = express.Router();
let userController = require('../controller/users');

//Get list of all items
router.get('/userList', userController.userList); 

module.exports = router;