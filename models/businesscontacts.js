let mongoose = require('mongoose');

let businessContactsModel = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    phoneNumber: String,
    email: {
      type: String, 
      match: [/.+\@.+\..+/, "Please fill a valid email address."]
    }
  },
  {
    collection: "businessContacts"
  }
);

module.exports = mongoose.model('Business Contacts', businessContactsModel);