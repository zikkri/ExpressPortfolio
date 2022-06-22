//users.js | zack bowker | 301199878 | june 3
var express = require('express');
var router = express.Router();
let userController = require('../controller/user');
let passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {     
    userName: req.user ? req.user.username : '' 
  });
});

//sign up users
router.get('/signup', userController.renderSignup);
router.post('/signup', userController.signup);

//sign in users
router.get('/signin', userController.renderSignin);
router.post('/signin', userController.signin); 

//sign out users
router.get('/signout', userController.signout); //once added a signout page change the path

module.exports = router;