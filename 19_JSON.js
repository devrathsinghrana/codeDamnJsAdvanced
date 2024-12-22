const aObj = {
  a: 1,
  b: null,
  c: undefined,
};
// Filter out undefined properties from object
console.log("aObj>>>", aObj);

const aObjToJson = JSON.stringify(aObj);

console.log("aObjToJson>>>", aObjToJson);

const aJsonToObj = JSON.parse(aObjToJson);

console.log("aJsonToObj>>>", aJsonToObj);

const bObj = {
  a: 2,
  b: undefined,
  c: 23,
};

console.log("JSON.stringify(bObj)>>>", JSON.stringify(bObj));
console.log("JSON.stringify(bObj, null, 4)>>>", JSON.stringify(bObj, null, 4));
console.log(
  "JSON.parse(JSON.stringify(bObj))>>>",
  JSON.parse(JSON.stringify(bObj))
);

const cObj = {
  prop1: 100,
  prop2: 200,
};
console.log(
  "JSON.stringify(cObj, ['prop2'], null)>>>",
  JSON.stringify(cObj, ["prop2"], null)
);

function fn(key, value) {
  console.log("{key,value}>>>", { key, value });
  return value;
}

const dObj = {
  prop1: 100,
  prop2: null,
  prop3: undefined,
};

console.log("JSON.stringify(dObj, fn)>>>", JSON.stringify(dObj, fn));

const eObj = { ...dObj, nested1: { nested2: { nested3: 100 } } };

console.log("JSON.stringify(eObj,fn)>>>", JSON.stringify(eObj, fn));
