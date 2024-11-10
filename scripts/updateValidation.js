import {formElement2} from "./id.js";

let selectedDepartureDate;
let selectedArrivalDate;
let totalBookingAmount;


const roomPrices = {
    standard: 8300,
    deluxe: 12450,
    suite: 20750
};

formElement2.formUpdate.addEventListener('submit',e => {
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
    if(formElement2.firstnameUpdate.value === ''){
        error('Enter your first name.',formElement2.fNameErrorUpdate);
       return false;
    }else{
        error('',formElement2.fNameErrorUpdate);
    }

    const regex =/^[A-Za-z]{2,}$/;
    if(!(regex.test(formElement2.firstnameUpdate.value))){
        error('Enter valid first name.',formElement2.fNameErrorUpdate);
        return false;
    }
    error('',formElement2.fNameErrorUpdate);
    return true;
}

function isValidLastName(){
    if(formElement2.lastnameUpdate.value === ''){
        error('Enter your last name.',formElement2.lNameErrorUpdate);
       return false;
    }else{
        error('',formElement2.lNameErrorUpdate);
    }

    const regex =/^[A-Za-z]+$/;
    if(!(regex.test(formElement2.lastnameUpdate.value))){
        error('Enter valid last name.',formElement2.lNameErrorUpdate);
        return false;
    }
    error('',formElement2.lNameErrorUpdate);
    return true;
}

function isPhoneNumber(){
    if(formElement2.phoneNumberUpdate.value === ''){
        error('Enter your phone number.',formElement2.phoneErrorUpdate);
       return false;
    }else{
        error('',formElement2.phoneErrorUpdate);
    }

    const regex =/^[789]\d{9}$/;
    if(!(regex.test(formElement2.phoneNumberUpdate.value))){
        error('Enter valid phone number.',formElement2.phoneErrorUpdate);
        return false;
    }
    error('',formElement2.phoneErrorUpdate);
    return true;
}

function isValidEmail(){
    if(formElement2.emailUpdate.value === ''){
        error('Enter your email.',formElement2.emailErrorUpdate);
       return false;
    }else{
        error('',formElement2.emailErrorUpdate);
    }

    const regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!(regex.test(formElement2.emailUpdate.value))){
        error('Enter valid email.',formElement2.emailErrorUpdate);
        return false;
    }
    error('',formElement2.emailErrorUpdate);
    return true;
}

function isRoomType(){
    if(formElement2.roomTypeUpdate.value === ''){
        error('Please select a room type.',formElement2.roomTypeErrorUpdate);
       return false;
    }
    error('',formElement2.roomTypeErrorUpdate);
    return true;
}

function isRoomCount(){
    const count = formElement2.roomCountUpdate.value;
    if(count <= 0 || count == 'e'){
        error('The room count must be at least 1.',formElement2.numOfRoomErrorUpdate);
        return false;
    }
    if(count > 10){
        error('Please note that availability is limited to a maximum of 10 rooms.',formElement2.numOfRoomErrorUpdate);
        return false;
    }
    error('',formElement2.numOfRoomErrorUpdate);
        return true;
}

function isArrivalDate(){
    const selectedDate = new Date(formElement2.arrivalDateUpdate.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDate.getTime()) || selectedDate < today) {
        error('Arrival date must be today or a future date.', formElement2.adateErrorUpdate);
        return false;
    }
        error('', formElement2.adateErrorUpdate); 
        return true;
}

function isDepartureDate() {
    selectedDepartureDate = new Date(formElement2.departureDateUpdate.value);
    selectedArrivalDate = new Date(formElement2.arrivalDateUpdate.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(selectedDepartureDate.getTime()) || selectedDepartureDate <= today) {
        error('The departure date must be a future date and cannot be today.', formElement2.ddateErrorUpdate);
        return false;
    }

    if(selectedDepartureDate <= selectedArrivalDate){
        error('The departure date must be later than the arrival date.', formElement2.ddateErrorUpdate);
        return false;
    }

    error('', formElement2.ddateErrorUpdate);
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
    formElement2.firstnameUpdate.value = "";
    formElement2.lastnameUpdate.value = ""; 
    formElement2.phoneNumberUpdate.value = ""; 
    formElement2.emailUpdate.value = "";
    formElement2.roomTypeUpdate.value = ""; 
    formElement2.roomCountUpdate.value = ""; 
    formElement2.arrivalDateUpdate.value = "";
    formElement2.departureDateUpdate.value = ""; 
}


function onSubmit(){
    if(validation()){
        setTimeout(() => {
            const totalBookingAmount = calculatePrice(formElement2.roomTypeUpdate.value,  formElement2.roomCountUpdate.value, selectedArrivalDate,selectedDepartureDate);

            const confrimed = confirm(`Your total price is: ₹${totalBookingAmount.toFixed(2)}.\n\nDo you wish to confirm your booking?`);

            if(confrimed){
                const bookingData = new FormData();
                bookingData.append('id',Number(formElement2.idUpdate.value));
                bookingData.append('first_name',formElement2.firstnameUpdate.value);
                bookingData.append('lastname',formElement2.lastnameUpdate.value);
                bookingData.append('phone_number',formElement2.phoneNumberUpdate.value);
                bookingData.append('email',formElement2.emailUpdate.value);
                bookingData.append('room_type',formElement2.roomTypeUpdate.value);
                bookingData.append('room_count',formElement2.roomCountUpdate.value);
                bookingData.append('arrival_date',formElement2.arrivalDateUpdate.value);
                bookingData.append('departure_date',formElement2.departureDateUpdate.value);
                bookingData.append('total_amount',totalBookingAmount);

                fetch('./update.php', {
                    method: 'POST',
                    body: bookingData
                })                
                .then(response=>response.text())
                .then(result => {
                    if (result.includes("Record updated successfully.")) {
                        alert("Thank you for updating your booking. Your reservation details have been successfully revised, and we look forward to welcoming you soon.");
                        clear();
                    } else {
                        alert(result); 
                    }
                });
            }
        }, 100);
    }
}