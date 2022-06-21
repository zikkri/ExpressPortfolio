let user = require('../models/user')
let passport = require('passport');

exports.user = function(req, res, next){
  res.render('users', {
    title: 'Users',
    name: 'Student',
    userName: req.user ? req.user.userName : ''     
  });
}

exports.zack = function(req, res, next){
  res.render('users', {
    title: 'Users',
    name: 'Zack'
  });
}

function getErrorMessage(err){
  console.log('============> Error: '+ err);

  let message = '';

  if(err.code){
    switch(err.code){
      case 11100:
      case 11101:
        message = 'Username already exists.';
        break;
      default:
        message = 'Something went wrong.';
        break;
    }
  }
  else {
    for(var errName in err.errors){
      if(err.errors[errName].message)
      message = err.errors[errName].message;
    }
  }
  return message;
};


module.exports.renderSignup = function(req, res, next){
  if(!req.user){
    let newUser = user();

    res.render('auth/signup', {
      title: 'sign up form',
      messages: req.flash('error'),
      user: newUser
    });
  }
  else {
    return res.redirect('/');
  }
};

module.exports.signup = function(req, res, next){
  if(!req.user){
    console.log(req.body);

    let newUser = new user(req.body);
    newUser.provider = 'local';
    console.log(user);

    newUser.save((err) => {
      if(err){
        let message = getErrorMessage(err);

        req.flash('error', message);

        return res.render('auth/signup', {
          title: 'sign up',
          messages: req.flash('error'),
          user: newUser
        });
      }
      req.login(newUser, (err) => {
        if(err) return next(err);
        return res.redirect('/');
      });
    });
  } else {
    return res.redirect('/');
  } 
};

module.exports.renderSignin = function(req, res, next){
  if(!req.user){
    res.render('auth/signin', {
      title: 'sign in',
      messages: req.flash('error') || req.flash('info')
    });  
  }
  else {
    console.log(req.user);
    return res.redirect('/');
  }
};


module.exports.signin = function(req, res, next){
  passport.authenticate('local', {   
    successRedirect: req.session.url || '/',
    failureRedirect: '/users/signin',
    failureFlash: true
  })(req, res, next);  
  delete req.session.url;
}

module.exports.signOut = function(req, res, next){
  req.logOut();
  req.redirect('/');
}