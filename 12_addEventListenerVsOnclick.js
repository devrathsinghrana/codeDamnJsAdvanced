/*
addEventListener
Let’s practice addEventListener in this exercise. Your job is to create the following webpage:

Inside index.html file, create a button with id my-button
The #my-button, when clicked, should set its own innerText as the innerText of the div#output on the right. Do not hardcode this or your test will fail.
Once clicked, the event listener should be removed (i.e. it should not set innerText again on clicking)
Use addEventListener to make this work

\

// write your code here
const btn = document.getElementById("my-button");
const out = document.getElementById("output");

const myFn = () => {
    console.log("HI")
    out.innerText = btn.innerText;
    btn.removeEventListener("click", myFn)
};

btn.addEventListener(
    "click", myFn
)


*/

const btn1 = document.getElementById("my-button");
const btn2 = document.getElementById("my-second-button");

btn1.onclick = () => {
  console.log("Meri kismat ka ank: ", Math.random());
};

btn1.onclick = () => {
  console.log("Tu idhar nikal");
};

btn2.addEventListener("click", () => {
  console.log("Meri kismat ka ank phirse: ", Math.random());
});

btn2.addEventListener("click", () => {
  console.log("Tu idhar nikal phirse");
});
