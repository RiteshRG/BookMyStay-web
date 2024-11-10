const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const nameErrorField = document.getElementById('name-error');
const emailErrorField = document.getElementById('email-error');
const phoneErrorField = document.getElementById('phone-error');

form.addEventListener('submit', e => {
  e.preventDefault();

  onSubmit();
});

console.log(isValidEmail);

function error(errorField,message){
  if(message === ''){
    errorField.style.display = 'none';
  }
  errorField.style.display = 'block';
  errorField.innerHTML = message;
}

function isnameValid(){ 
  nameRegex = /^[a-zA-Z\s]+$/;

  if(name.value === ''){
    error(nameErrorField,'Full name is required.');
    return false;
  }else{
    error(nameErrorField,'');
  }

  if(!(nameRegex.test(name.value))){
    error(nameErrorField,'Invalid Name.');
    return false;
  }
  error(nameErrorField,'');
  return true;
}


function isValidEmail(){
  const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if(email.value === ''){
    error(emailErrorField,'Email is required.');
    return false;
  }else{
    error(emailErrorField,'');
  }
  
  if(!(emailRegex.test(email.value))){
    error(emailErrorField,'Invalid Email.');
    return false;
  }
  error(emailErrorField,'');
  return true;
}

function isValidPhone(){
  const phoneRegex =/^[789]\d{9}$/;
  if(phone.value === ''){
    error(phoneErrorField,'Phone No. is required.');
    return false;
  }else{
    error(phoneErrorField,'');
  }

  if(!(phoneRegex.test(phone.value))){
    error(phoneErrorField,'Phone No.');
    return false;
  }
  error(phoneErrorField,'');
  return true;
}

function clearInputFeilds(){
  name.value = '';
  email.value = '';
  phone.value = '';
  message.value = '';
}


function ValidateInputs(){
  const validName = isnameValid();
  const validEmail = isValidEmail();
  const validPhone = isValidPhone();

  if(validName && validEmail && validPhone){
    error(nameErrorField,'');
    error(emailErrorField,'');
    error(phoneErrorField,'');
    clearInputFeilds();
    return true;
  }

  return false;
}

function onSubmit() {
  if (ValidateInputs()) {
    setTimeout(() => {
        alert("Thank you for your message! We will respond shortly.")
    },100)
  }
}