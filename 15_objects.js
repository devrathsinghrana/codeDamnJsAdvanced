const w = 120;
const x = 120;
const y = { key: 23 };
const z = { key: 23 };
const m = y;
console.log("w===x", w === x);
console.log("y===z", y === z);
console.log("y===m", y === m);

console.log("NaN === NaN", NaN === NaN);
console.log("[NaN].includes(NaN)", [NaN].includes(NaN));

const obj = {
  name: "Devrath",
  age: 23,
  office: {
    location: "gurugram",
    hospital: {
      name: "Prayagraj MH",
    },
  },
  birthPlace: "Prayagraj",
};

function getObjectKeyValuesUsingObjKeys(inputObj) {
  const objectKeysArray = Object.keys(inputObj);
  for (let i = 0; i < objectKeysArray.length; i++) {
    const keyName = objectKeysArray[i];
    const value = inputObj[keyName];
    if (typeof value === "object") {
      console.log(`${keyName} => ${value}`);
      getObjectKeyValuesUsingObjKeys(value);
    } else {
      console.log(`${keyName} => ${value}`);
    }
  }
}

getObjectKeyValuesUsingObjKeys(Object.assign({}, obj));

function getObjectKeyValuesUsingForIn(inputObj) {
  for (const keyName in inputObj) {
    const value = inputObj[keyName];
    if (typeof value === "object") {
      console.log(`For-in ----> ${keyName} => ${value}`);
      getObjectKeyValuesUsingForIn(value);
    } else {
      console.log(`For-in ----> ${keyName} => ${value}`);
    }
  }
}

getObjectKeyValuesUsingForIn(Object.assign({}, obj));
