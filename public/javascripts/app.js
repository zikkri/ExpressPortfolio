//make sure this matches up when confirming login - may be faded and name things differently
//will for sure need to change things up to make it work with my site

if(getTitle == 'business contacts'){
  let deleteButtons = document.querySelectorAll('.button');
  for(button in deleteButtons)
  {
    button.addEventListener('click', (event) => {
      if(!confirm('Are you sure?')){
        //cancels the action 
        event.preventDefault();
      }
    });
  }
}

if(getTitle == 'sign-up'){
  const confirm = document.querySelector('input[name=confirm]');
  confirm.addEventListener('change', onChange); 
}

function onChange(){
  const password = document.querySelector('input[name=password]');
  const confirm = document.querySelector('input[name=confirm]');

  if(confirm.value === password.value){
    confirm.setCustomValidity('');
  }
  else {
    confirm.setCustomValidity('Passwords do not match.');
  }
}