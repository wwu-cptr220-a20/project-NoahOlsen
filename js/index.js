'use strict';

let startButton = document.getElementById('startbutton');
let body = document.getElementById('buttons');
let paren = document.getElementById('results');
let interval = ((Math.random() * 10 % 4) + 1) * 1000;
let WaitTime = "";
let startTime = 0;
let endTime = 0;

function changeColor() {
    startButton.setAttribute('id','greenbutton');
    startButton.innerHTML = "CLICK!"

    startTime = new Date().getTime();

    startButton.removeEventListener("click", logError);
    startButton.addEventListener("click", logTime);
}

function logTime() {
    endTime = new Date().getTime();
    let reactionTime = (endTime - startTime) / 1000;

    paren.innerHTML = "Your reaction time is: " + reactionTime + " seconds!";
    startButton.removeEventListener("click", logTime);
    reset();
}

function logError() {
    paren.innerHTML = "You clicked too early! Wait for the button to turn green.";
    clearTimeout(WaitTime);
    reset();
}

function reset() {
    startButton.setAttribute('id','startbutton');
    startButton.innerHTML = "Try Again?"
    startButton.addEventListener("click", run);

}

function run() {
    startButton.removeEventListener("click", run);
    paren.innerHTML = "";

    startButton.innerHTML = "Click When I'm Green";
    startButton.setAttribute('id', 'redbutton');

    WaitTime = setTimeout(changeColor,interval);
    WaitTime;
    startButton.addEventListener("click", logError);
}

startButton.addEventListener("click", run);

