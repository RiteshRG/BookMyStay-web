const standardBtn = document.querySelector('#standardBtn');
const deluxeBtn = document.querySelector('#deluxeBtn');
const suiteBtn = document.querySelector('#suiteBtn');

standardBtn.addEventListener('click', () => {
    window.location.href = "bookNow.html?room=standard";
});

deluxeBtn.addEventListener('click', () => {
    window.location.href = "bookNow.html?room=deluxe";
});

suiteBtn.addEventListener('click', () => {
    window.location.href = "bookNow.html?room=suite";
});