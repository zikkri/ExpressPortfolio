//change all of this to match what we need for project

let inventory = require('../models/inventory');

module.exports.inventoryList = function(res, req, next){
  inventory.find((err, inventoryList) => {
    if(err)
    {
      return console.log(err);
    }
    else
    {
      console.log(inventoryList);
      res.render('inventory/list', {
        
        
      });
    }
  });
}