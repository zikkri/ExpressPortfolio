const passport = require('passport');

module.exports = function(){
  const user = require('../models/user');

  //when user is authenticated
  //passport will save its id property to the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //later on when user object is needed,
  //passport will use the id property to grab 
  //the user object from the database
  passport.deserializeUser((id, done) =>{
    user.findOne(
      {_id: id},
      '-password -salt',
      (err, user) => {
        done(err, user);
      }
    );
  });

  require('./local')();
};