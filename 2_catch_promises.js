/*
.catch
Promises are fun way to work with asynchronous activities in JavaScript. In this lab, you’ll have to code a function which accepts a “promise” as argument.

function fn(customPromise) {
   // customPromise here is a promise, so you can use .then, etc. here
}
Challenge Instructions
Use .catch on customPromise to return the string ‘error’

\
*/

function fn(customPromise) {
  return customPromise
    .then((res) => res.json())
    .then((res) => console.log("data object>>>", res))
    .catch((err) => console.log("error>>>", err));
}

fn(fetch("/data.json"));
fn(fetch("https://"));
