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
  .catch((err) => {
    console.log("Error logged: ", err);

    return { lol: "ALWAYS" };
  })
  .then((res) => {
    console.log("O/P instantly after catch: ", res);
    return fetch("/data.json");
  })
  .then((res) => res.json())
  .then((res) => console.log("My res after catch: ", res));

const chainingCatchPromise = getMyPromise();

chainingCatchPromise
  .then((res) => console.log("Promise successful 1."))
  .then((res) => {
    console.log("Promise successful 2.");
    throw new Error("Code phatgya mere bhai!");
  })
  .then((res) => console.log("Promise successful 3."))
  .catch((err) => console.log("Error 1: ", err))
  .then((res) => console.log("Promise successful 4."))
  .then((res) => {
    console.log("Promise successful 5.");
    throw new Error("Code phatgya mere bhai phirse!");
  })
  .then((res) => console.log("Promise successful 6."))
  .catch((err) => console.log("Error 2: ", err))
  .then((res) => console.log("Promise successful 7."))
  .then((res) => console.log("Promise successful 8."));
