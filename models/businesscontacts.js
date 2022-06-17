let mongoose = require('mongoose');

let businessContactsModel = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    phoneNumber: String,
    emailAddress: {
      type: String, 
      match: [/.+\@.+\..+/, "Please fill a valid email address."]
    }
  },
  {
    collection: "businessContacts"
  }
);

module.exports = mongoose.model('Business Contacts', businessContactsModel);