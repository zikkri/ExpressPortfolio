let express = require('express');
let router = express.Router();
let contactsController = require('../controller/businesscontacts');

//to make sure no one can delete or update things on teh business contacts list 
function requireAuth(req, res, next){
  //check if user is logged in
  if(!req.isAuthenticated()){
    req.session.url = req.originalUrl;
    return res.redirect('/users/signin');
  }
  next(); 
}










