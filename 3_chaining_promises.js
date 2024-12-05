const getMyPromise = () => fetch("/data.json");
const getMyErrorPromise = () => fetch("https://");

const myPromise = getMyPromise();
const myErrorPromise = getMyErrorPromise();

myPromise
  .then((res) => res.json())
  .then()
  .then((res) => console.log("My object data 1: ", res)) //since we have consoled the response here and we are not returning anything we get undefined below
  .then((res) => console.log("My object data 2: ", res))
  .catch((err) => console.log("Error logged: ", err));

myErrorPromise
  .then((res) => console.log("My res: ", res))
  .catch((err) => console.log("Error logged: ", err))
  .then(() => fetch("/data.json"))
  .then((res) => res.json())
  .then((res) => console.log("My res after catch: ", res));
