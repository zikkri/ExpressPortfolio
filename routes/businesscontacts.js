let express = require('express');
let router = express.Router();
let businessContactsController = require('../controller/businesscontacts');

router.get('/' , function(req, res, next){
  console.log("success");
});

//show contact list
router.get('/businesscontacts', businessContactsController.businessContactsList);

//update page
router.get('/update/:id', requireAuth,  businessContactsController.displayEditPage);
router.post('/update/:id', businessContactsController.processEdit);

//remove element from table
router.get('/delete/:id', businessContactsController.performDelete);


router.get('/update', function(req, res, next){
  res.render('business/update', {title: 'update'})
});

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