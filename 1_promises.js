function getPromise() {
  //   return fetch("https://");
  return fetch("/data.json");
}

const promiseObj = getPromise();

promiseObj
  .then((res) => console.log("res>>>", res))
  .catch((err) => console.log("err>>>", err));

console.log("promiseObj>>>", promiseObj);

/*
.then
Promises are fun way to work with asynchronous activities in JavaScript. In this lab, you’ll have to code a function which accepts a “promise” as argument.

function fn(customPromise) {
   // customPromise here is a promise, so you can use .then, etc. here
}
Challenge Instructions
Use .then on customPromise to return one more than the value returned by customPromise. For example, if resolving customPromise gives you 5, you should return a new promise from fn which resolves to 6

\
*/

function fn(promise) {
  promise
    .then((res) => res.json())
    .then((res) => console.log("res.age + 1>>>", res.age + 1));
}

fn(fetch("/data.json"));
