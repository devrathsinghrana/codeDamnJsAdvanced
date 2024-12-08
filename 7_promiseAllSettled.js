/*
Promise.allSettled
Let’s try Promise.allSettled. In the function on right, your job is to resolve all the promises and multiply their resolved values by 2. Make sure you use Promsie.allSettled for this as number of promises passed could be variable.

Also, make sure, if a promise “fails”, you return null value for that.
*/

async function fn(...promises) {
  // resolve them all
  // add one to all of them

  const responses = await Promise.allSettled([...promises]);

  const successResponsesReq = responses.filter(
    (res) => res.status === "fulfilled"
  );

  const successResponses = successResponsesReq.map((res) => {
    return res.value;
  });

  const requiredResponse = await Promise.all(
    successResponses.map((t) => t.json())
  );
  return requiredResponse;
}
const req1 = fetch("https://"); //this will fail the whole promise
const req2 = fetch("/data2.json");
const req3 = fetch("/data3.json");
const req4 = fetch("https://"); //this will fail the whole promise
const req5 = fetch("/data2.json");
const req6 = fetch("/data3.json");

(async () => {
  const fetchAll = fn(req1, req2, req3);
  const fetchAllAwait = await fn(req4, req5, req6);
  console.log("fetchAll>>>", fetchAll);
  console.log("fetchAllAwait>>>", fetchAllAwait);
})();
