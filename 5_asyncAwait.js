const boot = async () => {
  const fn = fetch("/data.json");
  console.log("State 1", fn);
  await fn;
  const data = await fn;
  const data2 = await data.json();
  console.log("State 2", data2);
};

boot();
