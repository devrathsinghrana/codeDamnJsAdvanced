/*
Mini-promised calculator
In this lab, let us create a mini-promise-based calculator. The caluclator function you see on the right, make sure of the following challenge constraints:

You should return a promise from the function
If operation is +, return num1 + num2 as the resolved promise value
If operation is -, return num1 - num2 as the resolved promise value
If operation is anything else, return error as rejected value.
*/

function calculator(num1, num2, operation) {
  // return a Promise
  switch (operation) {
    case "+":
      return Promise.resolve(num1 + num2);
    case "-":
      return Promise.resolve(num1 - num2);
    default:
      return Promise.reject("error");
  }
}

const addNumbers = calculator(23, 23, "+");
const subtractNumbers = calculator(23, 23, "-");
// const doNothingWithNumbers = calculator(); //This will give error as we have not used catch to handle rejected response - https://stackoverflow.com/questions/57750916/what-does-uncaught-in-promise-mean
const doNothingWithNumbers = calculator().catch(() => undefined);

console.log("addNumbers>>>", addNumbers);
console.log("subtractNumbers>>>", subtractNumbers);
console.log("doNothingWithNumbers>>>", doNothingWithNumbers);
