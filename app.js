let homeEl = document.getElementById("homescore");
let guestEl = document.getElementById("guestscore");

let homecount = 0;
let guestcount = 0;


function plusone() {
    homecount += 1;
    homeEl.textContent = homecount;
}

function plustwo() {
    homecount += 2;
    homeEl.textContent = homecount;
}

function plusthree() {
    homecount += 3;
    homeEl.textContent = homecount;
}

function reset() {
    homecount = 0;
    homeEl.textContent = homecount;
}

function plusoneguest() {
    guestcount += 1;
    guestEl.textContent = guestcount;
}

function plustwoguest() {
    guestcount += 2;
    guestEl.textContent = guestcount;
}

function plusthreeguest() {
    guestcount += 3;
    guestEl.textContent = guestcount;
}

function resetguest() {
    guestcount = 0;
    guestEl.textContent = guestcount;
}
