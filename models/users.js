let mongoose = require('mongoose');

let usersModel = mongoose.Schema(
  {
    userID: String,
    name: String,
    password: String,
    email: String    
  },
  {
    collection: "users"
  }
);

module.exports = mongoose.model('Users', usersModel);
