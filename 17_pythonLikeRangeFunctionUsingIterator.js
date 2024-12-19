let range = (start, stop, stepper = 1) => {
  start -= stepper;
  return {
    [Symbol.iterator]: () => ({
      next() {
        start += stepper;
        return {
          value: start,
          done: start > stop,
        };
      },
    }),
  };
};

console.log("[...range(1, 10)]>>", [...range(1, 10)]);
console.log("[...range(1, 10,3)]>>", [...range(1, 10, 3)]);

for (const value of [...range(1, 10)]) {
  console.log("value>>", value);
}
