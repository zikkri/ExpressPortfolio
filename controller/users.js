//change all of this to match what we need for project

let users = require('../models/users');

module.exports.userList = function(res, req, next){
  users.find((err, userList) => {
    if(err)
    {
      return console.log(err);
    }
    else
    {
      console.log(userList);
      res.render('user/list', {
          title: "User List",
          UserList: userlist        
      });
    }
  });
}