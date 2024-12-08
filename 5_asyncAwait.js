const boot = async () => {
  const fn = fetch("/data.json");
  console.log("State 1", fn);
  await fn;
  const data = await fn;
  const data2 = await data.json();
  console.log("State 2", data2);
};

boot();

const promise = async () => {
  try {
    Promise.reject("THIS IS my lovely error");
  } catch (err) {
    console.log(`My error is love: ${err}`);
  }
};

promise();

// async automatically indicates it is a promise
const promise2 = async () => {
  throw new Error("Hey");
};

promise2();
console.log(
  "This is error promise which will be printed as async is a promise so will go to micro queue."
);

const fun = () => {
  throw new Error("Hey");
};

fun();
console.log("This is fun not printed");
