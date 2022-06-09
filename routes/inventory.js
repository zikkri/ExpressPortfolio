var express = require('express');
var router = express.Router();
let inventoryController = require('../controller/inventory');

//Get list of all items
router.get('/list', inventoryController.inventoryList);


module.exports = router;