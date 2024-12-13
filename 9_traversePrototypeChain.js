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

/*
Using 'delete' and 'hasOwnProperty'
In this lab, you’ll be passed an object and a property to add/delete on that object. Make sure of the following things:

You have to delete the property if it exists
You have to add the property to the object if it doesn’t exist and set it to objects are cool string value.
Make sure your property check uses hasOwnProperty as the tests below might evaluate with some properties on prototypal chain too.
Also make sure you return the final object from the function
Example 1

{
  prop1: 100,
  __proto__: {
    prop2: 200
  }
}
If the above object is passed with the property to check as prop2, your returned object should be:

{
  prop1: 100,
  prop2: "objects are cool"
  __proto__: {
    prop2: 200
  }
}
Example 2

{
  prop1: 100,
  prop2: 200
}
If the above object is passed with the property to check as prop2, your returned object should be:

{
  prop1: 100
}
\
*/

function addOrDeleteProp(object, propertyName) {
  // write your code here
  if (object.hasOwnProperty(propertyName)) {
    delete object[propertyName];
  } else {
    object[propertyName] = "objects are cool";
  }
  return object;
}

const res = addOrDeleteProp(
  {
    prop1: 100,
    prop2: 200,
  },
  "prop2"
);

console.log("res>>>", res);
