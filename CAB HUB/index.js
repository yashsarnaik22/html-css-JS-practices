const requestBtn = document.querySelector('.request_btn');
const pickupValue = document.querySelector('.pickup');
const destValue = document.querySelector('.destination');
const errText = document.querySelector('.err_output');

function errHandler(message) {
 errText.innerHTML = message
  setTimeout(() => {
   errText.innerHTML = ``
  }, 2000);
}

function formValidation (e) {

 if(!pickupValue.value && !destValue.value) {
  e.preventDefault()
  return errHandler('please provide a pickup location and destination')
 } else if(!pickupValue.value) {
  e.preventDefault()
  return errHandler('please provide a pickup location')
 } else if (!destValue.value) {
  e.preventDefault()
  return errHandler('please provide a destination')
 } else {
  alert("Your cab is on the way!");
 }
}

requestBtn.addEventListener('click', formValidation);
