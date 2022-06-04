//contact.js | zack bowker | 301199878 | june 3

function validation(){
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var number = document.getElementById('number');
  var inquiry = document.getElementById('inquirySelection');
  var notes = document.getElementById('additional');  

  name.setCustomValidity('');
  if(name.value == 0){
    name.setCustomValidity("Please enter your name.");
    return false;
  }   

  email.setCustomValidity('');
  if(email.value == 0){
    email.setCustomValidity("Please enter your email.");
    return false;
  }   

  number.setCustomValidity('');
  if(number.value == 0){
    number.setCustomValidity("Please enter your phone number.");
    return false;
  }   

  inquiry.setCustomValidity('');
  if(inquiry.value == 'none'){
    inquiry.setCustomValidity("Please select an inquiry.");
    return false;
  }   
  //console.log(name.value + ' ' +  email.value + ' ' +   number.value + ' ' +   inquiry.value + ' ' +  notes.value);
  alert('Thank you, ' + (name.value) + ' for contacting. I will get back to you as soon as possible!');       
}