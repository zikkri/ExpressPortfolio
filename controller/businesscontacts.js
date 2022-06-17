let businessContactsModel = require('../models/businesscontacts');

module.exports.businessContactsList = function(req, res, next) {  
  businessContactsModel.find((err, businessContactsList) => {
      
      if(err)
      {
          return console.error(err);
      }
      else
      {
          res.render('/businesscontacts/businesscontacts', { ////something in here need to fix
          title: 'business contacts', 
          businessContactsList: businessContactsList,
          userName: req.user ? req.user.username : ''
           })           
      }
  });
}

module.exports.displayEditPage = (req, res, next) => {
  
    let id = req.params.id;

    businessContactsModel.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('businesscontacts/update', {
                title: 'update', 
                contact: updateContact,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


module.exports.processEdit = (req, res, next) => {

  let id = req.params.id

  let updatedContact = businessContactsModel({
      _id: req.body.id,       
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      emailAddress: req.body.emailAddress
  });

  businessContactsModel.updateOne({_id: id}, updatedContact, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {                    
          res.redirect('/businesscontacts/businesscontacts');
          return res.status(200).json(
              { 
                  success: true, 
                  message: 'contact updated successfully.'
              }
          );
      }
  });

}

module.exports.performDelete = (req, res, next) => {

  let id = req.params.id;


  businessContactsModel.remove({_id: id}, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
          // refresh the book list
          res.redirect('/businesscontacts/businesscontacts');
      }
  });
}


module.exports.displayAddPage = (req, res, next) => {

    let newItem = businessContactsModel();

    res.render('businesscontacts/update', { /////not sure about this
        title: 'Add a new Item',
        item: newItem,
        userName: req.user ? req.user.username : ''
    })          

}

module.exports.processAdd = (req, res, next) => {

  let newItem = businessContactsModel({
    _id: req.body.id,     
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    emailAddress: req.body.emailAddress
  });

  businessContactsModel.create(newItem, (err, item) =>{
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {                    
          res.redirect('/businesscontacts/businesscontacts');
          res.status(200).json(item);     
      }
  });  
}