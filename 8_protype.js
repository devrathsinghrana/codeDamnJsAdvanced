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
