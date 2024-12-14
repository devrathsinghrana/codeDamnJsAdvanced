/*
innerText and innerHTML
Let’s practice innerText in this exercise. Your job is to create the following webpage:

Inside index.html file, create a button with id my-button
Inside index.html file, create another button with id my-second-button
The #my-button, when clicked, should set its own innerText as the innerText of the div#output on the right. Do not hardcode this or your test will fail.
The #my-second-button when clicked, should set its own innerHTML as innerText of the div#output on the right. Do not hardcode this or your test will fail.
Good luck


\
*/

// write your code here
const bt1 = document.getElementById("my-button");
const bt2 = document.getElementById("my-second-button");
const bt3 = document.getElementById("my-third-button");

const outputDiv = document.getElementById("output");

bt1.addEventListener("click", () => {
  outputDiv.innerText = bt1.innerText;
});

bt2.addEventListener("click", () => {
  outputDiv.innerText = bt2.innerHTML;
});

bt3.addEventListener("click", () => {
  const h1 = document.createElement("h1");
  h1.innerHTML = `wow Man world <span style="color:red;">rocks</span>`;

  document.body.appendChild(h1);
});
