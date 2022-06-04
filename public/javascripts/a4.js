//a4.js | zack bowker | 301199878 | june 3

//global variables  
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var address = document.getElementById("address");
var city = document.getElementById("city");
var postal = document.getElementById("postal");
var province = document.getElementById("province");
var age = document.getElementById("age");
var password = document.getElementById("password");
var confirmPass  = document.getElementById("confirm");
var email = document.getElementById("email");   


//unhide div if form passes validation, might need to make a re hide function
function unhideDiv(){
    var grey = document.getElementById("greyscreen");
    var hidden = document.getElementById("hidden");    
    grey.style.display = 'block';
    hidden.style.display = 'flex';
}

function hideDiv(){
    var grey = document.getElementById("greyscreen");
    var hidden = document.getElementById("hidden");    
    grey.style.display = 'none';
    hidden.style.display = 'none';

    fname.value = '';
    lname.value = '';
    address.value = '';
    city.value = '';
    postal.value = '';
    province.value = '';
    age.value = '';
    password.value = '';
    confirmPass.value = '';
    email.value = '';
}

function validateForm(){        
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value);
    var postalRegex =  /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/.test(postal.value.toUpperCase());
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password.value);   
    var validForm = true;

    fname.setCustomValidity('');
    if(fname.value == ''){
        fname.setCustomValidity("Please enter your first name.")    
        validForm = false;    
    }

    lname.setCustomValidity('');
    if(lname.value == ''){
        lname.setCustomValidity("Please enter your last name");
        validForm = false;    
    }

    address.setCustomValidity('');
    if(address.value == ''){
        address.setCustomValidity("Please enter your address.");
        validForm = false;    
    }

    city.setCustomValidity('');
    if(city.value == ''){
        city.setCustomValidity("Please enter your city.");
        validForm = false;    
    }

    postal.setCustomValidity('');
    if(postal.value == ''){
        postal.setCustomValidity("Please enter your postal code.");
        validForm = false;    
    }

    postal.setCustomValidity('')
    if(postalRegex == false){
        postal.setCustomValidity("Please enter a valid postal code.");
        validForm = false;    
    }

    province.setCustomValidity('');
    if(province.value == 0){
        province.setCustomValidity("Please select a province.");
        validForm = false;    
    }

    age.setCustomValidity('');
    if(age.value == '' || age.value < 18 || age.value > 100){
        age.setCustomValidity("Please enter your age.");
        validForm = false;    
    }

    password.setCustomValidity('');
    if(password.value == ''){
        password.setCustomValidity("Please enter a password.");
        validForm = false;    
    }

    password.setCustomValidity('');
    if(passwordRegex == false){
        password.setCustomValidity("Your password must be at least six characters and contain one digit and one uppercase letter.");
        validForm = false;    
    }

    confirmPass.setCustomValidity('');
    if(confirmPass.value != password.value){
        confirmPass.setCustomValidity("Your password does not match the previously entered password.");
        validForm = false;    
    }

    email.setCustomValidity('');
    if(email.value == ''){
        email.setCustomValidity("Please enter your email.");
        validForm = false;    
    }

    email.setCustomValidity('');
    if(emailRegex == false){
        email.setCustomValidity("Please enter a valid email.");
        validForm = false;    
    }            

    if(validForm){
        
        unhideDiv();
    }
}

function createEventListeners(){
    var register = document.getElementById("register");    
    
    if(register.addEventListener){
        register.addEventListener("click", validateForm, false);           
    } else if(register.attachEvent){
        register.attachEvent("onclick", validateForm)
    }      
}

function setupPage(){
    createEventListeners();      
    hideDiv(); 
    province.selectedIndex = -1;
}

if(window.addEventListener){
    window.addEventListener("load", setupPage, false)
}else if(window.attachEvent){
    window.attachEvent("onload", setupPage)
}