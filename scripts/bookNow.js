import {formElement} from "./id.js";

const url = new URLSearchParams(window.location.search);
const room =  url.get('room');
if(room){
    formElement.roomType.value = room;
}