/*
removeEventListener
Let’s practice removeEventListener in this exercise. Your job is to create the following webpage:

Inside index.html file, create a button with id my-button
Create another button with an ID my-second-button
Inside index.html file, create a text input field with id my-input
The #my-button, when clicked, should set the value of my-input as the innerText of the div#output on the right.
When #my-second-button is clicked, make sure the listener is removed from my-button



===================================

// write your code here
// write your code here
const bt1 = document.getElementById("my-button");
const bt2 = document.getElementById("my-second-button");
const outputDiv = document.getElementById("output");
const inputBox = document.getElementById("my-input");
const fun = () => {
    outputDiv.innerText = inputBox.value;
}
bt1.addEventListener("click", fun)


bt2.addEventListener("click", () => {
    bt1.removeEventListener("click", fun)
})
*/

const randBtn = document.getElementById("random-btn");
const stopRandBtn = document.getElementById("stop-random-generator");

randBtn.addEventListener("click", generateRandomNumber, { capture: true });
stopRandBtn.addEventListener("click", stopRandomGenerator);

function generateRandomNumber() {
  randBtn.innerHTML = `Random number: <span style="font-weight:600;">${Math.random()}</span>`;
}

function stopRandomGenerator() {
  randBtn.removeEventListener("click", generateRandomNumber, { capture: true });
}
