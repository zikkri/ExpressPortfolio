let express = require('express');
let router = express.Router();
let businessContactsController = require('../controller/businesscontacts');

router.get('/' , function(req, res, next){
  console.log("success");
});

router.get('/businesscontacts', businessContactsController.businessContactsList);

//to make sure no one can delete or update things on the business contacts list 
function requireAuth(req, res, next){
  //check if user is logged in
  if(!req.isAuthenticated()){
    req.session.url = req.originalUrl;
    return res.redirect('/users/signin');
  }
  next(); 
}

module.exports = router;