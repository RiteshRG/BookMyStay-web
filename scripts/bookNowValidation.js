import {formElement} from "./id.js";

let selectedDepartureDate;
let selectedArrivalDate;
let totalBookingAmount;

const roomPrices = {
    standard: 8300,
    deluxe: 12450,
    suite: 20750
};

formElement.form.addEventListener('submit',e => {
    e.preventDefault();

    onSubmit();
});

function error(message,id){
    if(message === ''){
        id.style.display = 'none';
    }else{
        id.style.display = 'block';
        id.innerHTML = message;
    }
}

function isValidFirstName(){
    if(formElement.firstname.value === ''){
        error('Enter your first name.',formElement.fNameError);
       return false;
    }else{
        error('',formElement.fNameError);
    }

    const regex =/^[A-Za-z]{2,}$/;
    if(!(regex.test(formElement.firstname.value))){
        error('Enter valid first name.',formElement.fNameError);
        return false;
    }
    error('',formElement.fNameError);
    return true;
}

function isValidLastName(){
    if(formElement.lastname.value === ''){
        error('Enter your last name.',formElement.lNameError);
       return false;
    }else{
        error('',formElement.lNameError);
    }

    const regex =/^[A-Za-z]+$/;
    if(!(regex.test(formElement.lastname.value))){
        error('Enter valid last name.',formElement.lNameError);
        return false;
    }
    error('',formElement.lNameError);
    return true;
}

function isPhoneNumber(){
    if(formElement.phoneNumber.value === ''){
        error('Enter your phone number.',formElement.phoneError);
       return false;
    }else{
        error('',formElement.phoneError);
    }

    const regex =/^[789]\d{9}$/;
    if(!(regex.test(formElement.phoneNumber.value))){
        error('Enter valid phone number.',formElement.phoneError);
        return false;
    }
    error('',formElement.phoneError);
    return true;
}

function isValidEmail(){
    if(formElement.email.value === ''){
        error('Enter your email.',formElement.emailError);
       return false;
    }else{
        error('',formElement.emailError);
    }

    const regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!(regex.test(formElement.email.value))){
        error('Enter valid email.',formElement.emailError);
        return false;
    }
    error('',formElement.emailError);
    return true;
}

function isRoomType(){
    if(formElement.roomType.value === ''){
        error('Please select a room type.',formElement.roomTypeError);
       return false;
    }
    error('',formElement.roomTypeError);
    return true;
}

function isRoomCount(){
    const count = formElement.roomCount.value;
    if(count <= 0 || count == 'e'){
        error('The room count must be at least 1.',formElement.numOfRoomError);
        return false;
    }
    if(count > 10){
        error('Please note that availability is limited to a maximum of 10 rooms.',formElement.numOfRoomError);
        return false;
    }
    error('',formElement.numOfRoomError);
        return true;
}

function isArrivalDate(){
    const selectedDate = new Date(formElement.arrivalDate.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDate.getTime()) || selectedDate < today) {
        error('Arrival date must be today or a future date.', formElement.adateError);
        return false;
    }
        error('', formElement.adateError); 
        return true;
}

function isDepartureDate() {
    selectedDepartureDate = new Date(formElement.departureDate.value);
    selectedArrivalDate = new Date(formElement.arrivalDate.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDepartureDate.getTime()) || selectedDepartureDate <= today) {
        error('The departure date must be a future date and cannot be today.', formElement.ddateError);
        return false;
    }

    if(selectedDepartureDate <= selectedArrivalDate){
        error('The departure date must be later than the arrival date.', formElement.ddateError);
        return false;
    }

    error('', formElement.ddateError);
    return true;
}


function validation(){
    const firstNameValid = isValidFirstName();
    const lastNameValid = isValidLastName();
    const emailValid = isValidEmail();
    const phoneNumberValid = isPhoneNumber();
    const roomTypeValid = isRoomType();
    const roomCountValid = isRoomCount();
    const arrivalDateValid = isArrivalDate();
    const departureDateValid = isDepartureDate();

   if(firstNameValid && lastNameValid && emailValid && phoneNumberValid && roomTypeValid && roomCountValid && arrivalDateValid && departureDateValid){
        return true;
   }
    return false;
}

function calculatePrice(roomType, roomCount, arrivalDate, departureDate) {
    const nights = (departureDate - arrivalDate) / (1000 * 60 * 60 * 24);
    const pricePerNight = roomPrices[roomType];
    totalBookingAmount = pricePerNight * roomCount * nights
    return totalBookingAmount;
}

function clear(){
    formElement.firstname.value = "";
    formElement.lastname.value = ""; 
    formElement.phoneNumber.value = ""; 
    formElement.email.value = "";
    formElement.roomType.value = ""; 
    formElement.roomCount.value = ""; 
    formElement.arrivalDate.value = "";
    formElement.departureDate.value = ""; 
}


function onSubmit(){
    if(validation()){
        setTimeout(() => {
            const totalBookingAmount = calculatePrice(formElement.roomType.value,  formElement.roomCount.value, selectedArrivalDate,selectedDepartureDate);

            const confrimed = confirm(`Your total price is: ₹${totalBookingAmount.toFixed(2)}.\n\nDo you wish to confirm your booking?`);

            if(confrimed){
                const bookingData = new FormData();
                bookingData.append('first_name',formElement.firstname.value);
                bookingData.append('lastname',formElement.lastname.value);
                bookingData.append('phone_number',formElement.phoneNumber.value);
                bookingData.append('email',formElement.email.value);
                bookingData.append('room_type',formElement.roomType.value);
                bookingData.append('room_count',formElement.roomCount.value);
                bookingData.append('arrival_date',formElement.arrivalDate.value);
                bookingData.append('departure_date',formElement.departureDate.value);
                bookingData.append('total_amount',totalBookingAmount);

                fetch('php/insert.php', {
                    method: 'POST',
                    body: bookingData
                })                
                .then(response=>response.text())
                .then(result => {
                    if (result.includes("Record inserted successfully.")) {
                        alert("Thank you for your booking! Your reservation has been successfully completed.");
                        clear();
                    } else {
                        alert(result); 
                    }
                });
            }else{
                alert("Your booking has not been confirmed. If you have any questions or need assistance, please don't hesitate to ask.");
            }
        }, 100);
    }
}