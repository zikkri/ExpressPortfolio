//fill this out 

let mongoose = require('mongoose');

//create a model class - match objects in the table/collection
//edit these later to match what we need for the project
let inventoryModel = mongoose.Schema(
  {
    //name : //datatype
    //name : //datatype
  },
  {
    //collection: //"collectionname"
  }
);

//change all of this to match what we need for the project

module.exports = mongoose.model('Inventory', inventoryModel);
