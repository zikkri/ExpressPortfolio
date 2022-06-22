exports.home = function(req, res ,next){
  res.render('index', {
    title: 'home',
    userName: req.body ? req.body.userName : ''     
  });
}

