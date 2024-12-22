"use strict";
/*
hello = "world";
console.log(hello);//Uncaught ReferenceError: hello is not defined
*/

/*
const obj = { x: 100 };
// Uncaught SyntaxError: Strict mode code may not include a with statement 
with (obj) {
  console.log(x);
}
*/

const protected = 100;
console.log(protected); //Uncaught SyntaxError: Unexpected strict mode reserved word
