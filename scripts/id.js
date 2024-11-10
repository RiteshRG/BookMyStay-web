const form = document.getElementById("form");
const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const phoneNumber = document.getElementById("phone");
const email = document.getElementById("email");
const roomType = document.getElementById("roomType");
const roomCount = document.getElementById("roomCount");
const arrivalDate = document.getElementById("arrivalDate");
const departureDate = document.getElementById("departureDate");
const fNameError = document.querySelector(".fname-error-field");
const lNameError = document.querySelector('.lname-error-field');
const phoneError = document.querySelector('.phone-error-field');
const emailError = document.querySelector('.email-error-field');
const roomTypeError = document.querySelector('.rtype-error-field');
const numOfRoomError = document.querySelector('.numOfRoom-error-field');
const adateError = document.querySelector('.adate-error-field');
const ddateError = document.querySelector('.ddate-error-field');

export const formElement = {
    form,
    firstname,
    lastname,
    phoneNumber,
    email,
    roomType,
    roomCount,
    arrivalDate,
    departureDate,
    fNameError,
    lNameError,
    phoneError,
    emailError,
    roomTypeError,
    numOfRoomError,
    adateError,
    ddateError
};

const formUpdate = document.getElementById("formUpdate");
const firstnameUpdate = document.getElementById("firstNameUpdate");
const lastnameUpdate = document.getElementById("lastNameUpdate");
const phoneNumberUpdate = document.getElementById("phoneUpdate");
const emailUpdate = document.getElementById("emailUpdate");
const roomTypeUpdate = document.getElementById("roomTypeUpdate");
const roomCountUpdate = document.getElementById("roomCountUpdate");
const arrivalDateUpdate = document.getElementById("arrivalDateUpdate");
const departureDateUpdate = document.getElementById("departureDateUpdate");
const fNameErrorUpdate = document.querySelector(".fname-error-field-Update");
const lNameErrorUpdate = document.querySelector('.lname-error-field-Update');
const phoneErrorUpdate = document.querySelector('.phone-error-field-Update');
const emailErrorUpdate = document.querySelector('.email-error-field-Update');
const roomTypeErrorUpdate = document.querySelector('.rtype-error-field-Update');
const numOfRoomErrorUpdate = document.querySelector('.numOfRoom-error-field-Update');
const adateErrorUpdate = document.querySelector('.adate-error-field-Update');
const ddateErrorUpdate = document.querySelector('.ddate-error-field-Update');
const idUpdate = document.getElementById('idUpdate');

export const formElement2 = {
    formUpdate,
    firstnameUpdate,
    lastnameUpdate,
    phoneNumberUpdate,
    emailUpdate,
    roomTypeUpdate,
    roomCountUpdate,
    arrivalDateUpdate,
    departureDateUpdate,
    fNameErrorUpdate,
    lNameErrorUpdate,
    phoneErrorUpdate,
    emailErrorUpdate,
    roomTypeErrorUpdate,
    numOfRoomErrorUpdate,
    adateErrorUpdate,
    ddateErrorUpdate,
    idUpdate
};
