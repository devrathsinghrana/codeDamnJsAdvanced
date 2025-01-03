/*
Promise.all
Let’s try Promise.all.

You've been given a function fn that can take a series of promises as arguments. This function should return an array as an output, doubling (multiplying by 2) the output/resolved value of each promise.

For Example,

fn(Promise.resolve(2), Promise.resolve(3), Promise.resolve(4)) // should return [4,6,8]
fn(Promise.resolve(2)) // should return [4]
// fn(Promise.reject(), Promise.resolve(5)) // should throw an error
Run Tests
*/

async function fn(...promises) {
  try {
    const responses = await Promise.all([...promises]);
    //   const requiredResponse = await Promise.all(responses.map((t) => t * 2));
    const requiredResponse = await Promise.all(responses.map((t) => t.json()));
    return requiredResponse;
  } catch (err) {
    console.log("my new error to show: ", err);
  }
}

const req1 = fetch("/dataa.json");//this will fail the whole promise
const req2 = fetch("/data2.json");
const req3 = fetch("/data3.json");
const req4 = fetch("/dataa.json");//this will fail the whole promise
const req5 = fetch("/data2.json");
const req6 = fetch("/data3.json");

(async () => {
  const fetchAll = fn(req1, req2, req3);
  const fetchAllAwait = await fn(req4, req5, req6);
  console.log("fetchAll>>>", fetchAll);
  console.log("fetchAllAwait>>>", fetchAllAwait);
})();
