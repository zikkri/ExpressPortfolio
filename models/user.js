let mongoose = require('mongoose');
let crypto = require('crypto');

let userModel = mongoose.Schema(
  {  
    firstName: String,
    lastName: String,    
    email: {
      type: String, 
      match: [/.+\@.+\..+/, "Please fill a valid email address."]
    },
    userName: {
      type: String,
      unique: true, 
      required: "Username is required",
      trim: true
    },
    password: {
      type: String, 
      validate: [(password) => {
        return password && password.length > 6;
      }, "Password should be longer."]      
    },
    salt: String,
    created: {
      type: Date,
      default: Date.now
    }    
  },  
  {
    collection: "user"
  }
);


//set virutal attirbute of fullname
userModel.virtual('fullName')
  .get(function() {
    return this.firstName + ' ' + this.lastName;
  })
  .set(function(fullName) {
    let splitName = fullName.split(' ');
    this.firstName = splitName[0] || '';
    this.lastName = splitName[1] || '';
});



//set up middleware pre 
userModel.pre('save', function(next){
    if(this.password){
      this.salt = Buffer.from(crypto.randomBytes(16).toString('base64'), 'base64')
      this.password = this.hashPassword(this.password);
    }

    next();
});

//set up middlware post
userModel.post('save', function(next){
  console.log("The user " + this.userName + " details have been saved.");
});

//add methods for schema
//encrypt password
userModel.methods.hashPassword = function(password){
  return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

//authenticate user 
userModel.methods.authenticate = function(password) {
  return this.password === this.hashPassword(password);
};

module.exports = mongoose.model('user', userModel);