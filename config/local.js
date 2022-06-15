const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user = require('../models/user');

module.exports = function(){
  console.log("=======> Local strategy function");
  passport.use(new LocalStrategy(authLocal));
}

function authLocal(username, password, done){
  console.log("===========> authLocal function");
  
  user.findOne({username: username}, (err, user) =>{
    if(err){
      return done(err);
    }
    
    if(!user){
      return done(null, false, {message: 'Unknown user.'});
    }

    if(!user.authenticate(password)){
      return done(null, false, {message: 'Invalid password'});
    }

    return done(null, user);
  });
}