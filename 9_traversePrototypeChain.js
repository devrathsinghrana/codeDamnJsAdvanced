const obj1 = {
  prop1: 3,
  prop5: 24,
};

const obj2 = {
  prop2: 4,
};

Object.setPrototypeOf(obj2, obj1);

console.log("obj2.prop3>>>", obj2.prop3);
obj1["prop3"] = 5;
obj2["prop3"] = undefined;
console.log("obj2.prop3>>>", obj2.prop3);
delete obj2["prop3"];
console.log("obj2.prop3>>>", obj2.prop3);
delete obj2.prop3;
console.log("obj2.prop3>>>", obj2.prop3); //it will only delete property which is true for Object.hasOwnProperty() but not the ones inside object proto
console.log("obj2.hasOwnProperty('prop5')>>>", obj2.hasOwnProperty("prop5"));
delete Object.getPrototypeOf(obj2).prop3; //this is same as delete obj2.__proto__.prop3;
console.log("obj2.prop3>>>", obj2.prop3);
