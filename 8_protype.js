const a = {
  prop1: 1,
};

const b = {
  prop2: 2,
};

const c = {
  prop3: 3,
};

const d = {
  prop4: 4,
};

d.__proto__ = c;
c.__proto__ = b;
b.__proto__ = a;

console.log("d>>>", d);
console.log("null>>>", d.__proto__.__proto__.__proto__.__proto__.__proto__);
console.log(
  "d.__proto__.__proto__.__proto__.prop1>>>",
  d.__proto__.__proto__.__proto__.prop1
);
console.log("d.prop1>>>", d.prop1);
console.log("d.prop4>>>", d.prop4);
console.log("undefined>>>", d.__proto__.__proto__.__proto__.prop4);

// getPrototypeOf

console.log("Object.getPrototypeOf(d)>>>", Object.getPrototypeOf(d));
console.log("d.__proto__", d.__proto__);
console.log(
  "d.__proto__ === Object.getPrototypeOf(d)",
  d.__proto__ === Object.getPrototypeOf(d)
);
console.log("c === Object.getPrototypeOf(d)", c === Object.getPrototypeOf(d));

// createObject

const z = {
  propZ: "1z",
};

z.__proto__ = null;
console.log("z>>>", z);

const y = Object.create(null);
console.log("y>>>", y);

const n = { props2: "4ewq" };

const o = Object.create(n);

console.log("o>>", o);

// setPrototypeOf

const j = { props: "wer34sdf" };
Object.setPrototypeOf(j, null); // this is same as j.__proto__ = null

console.log("j>>", j);

// Prototypical inheritance or linking using setPrototypeOf

const ask = {
  method1() {
    return "Hello World!";
  },
};
const reply = {
  method2() {
    return "Lul World!";
  },
};

Object.setPrototypeOf(ask, reply);

console.log("ask.method2()>>", ask.method2());

// Functional Prototypical inheritance

function GlobalCar() {
  this.wheel = 4;
  this.name = "audi";
}
GlobalCar();
console.log("wheel>>", wheel);
console.log("window.wheel>>", window.wheel);

function Car() {
  this.wheel = 4;
  this.fuel = 100;
  this.total = 0;
  this.me = function () {
    return this.wheel + 4;
  };
}
Car.prototype.calculate = function (amt) {
  //not using arrow function to maintain scope of "this" keyword to Car function itself
  this.total = this.fuel * amt;
};

const car1 = new Car();

const car2 = new Car();

console.log(
  "car1.calculate === car2.calculate>>",
  car1.calculate === car2.calculate
);

console.log("car1.me === car2.me>>", car1.me === car2.me);

car1.calculate(100);
car2.calculate(500);
console.log("car2.total>>", car2.total);
console.log("car1.total>>", car1.total);

console.log(
  "car1.calculate === car2.calculate>>",
  car1.calculate === car2.calculate
);

/*
Creating a car
In this lab, let’s create a Car function in JavaScript with the following properties:

It should have one property fuel which it gets through the parameter of function call.
It should have a function getDistanceCarCanTravel on the prototype of the function.
On the prototype of this Car function, define a variable called weather and set it to 0 as a number. Here’s the mapping:
Weather = 0 means it’s sunny. Therefore getDistanceCarCanTravel should return fuel * 10 as the value.
Weather = 1 means it’s rainy. Therefore getDistanceCarCanTravel should return fuel * 5 as the value.
Weather = 2 means it’s stormy. Therefore getDistanceCarCanTravel should return fuel * 2 as the value.
Final test case
Here’s how it’ll be evaluated:

const car1 = new Car(100)
const car2 = new Car(50)
car1.getDistanceCarCanTravel() // should be 1000
car2.getDistanceCarCanTravel() // should be 500
car1.__proto__.weather = 2

car2.getDistanceCarCanTravel() // should be 100
car1.weather = 1
car1.getDistanceCarCanTravel() // should be 500
car2.getDistanceCarCanTravel() // should be 100 
Good luck!

// write your code here

function Car(fuel) {
  this.fuel = fuel;
}
Car.prototype.weather = 0;
Car.prototype.getDistanceCarCanTravel = function() {
  if (this.weather == 0) {
    return this.fuel * 10;
  }
  if (this.weather == 1) {
    return this.fuel * 5;
  }
  if (this.weather == 2) {
    return this.fuel * 2;
  }
};
*/
