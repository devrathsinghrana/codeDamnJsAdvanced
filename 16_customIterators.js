//Default iterators
const arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 6];
for (let value of arr) {
  console.log("arr>>", value);
}

const set = new Set(arr);

for (let value of set) {
  console.log("set>>", value);
}

// Reverse array
const favLanguages = ["javascript", "python", "java"];

console.log("favLanguages.reverse()>>", [...favLanguages].reverse()); //this method mutates the original object by target it's reference

for (let i = favLanguages.length - 1; i >= 0; i--) {
  console.log("favLanguages[i]>>", favLanguages[i]);
}

for (let value of favLanguages) {
  console.log("favLanguages default iterator>>", value);
}

// Making custom iterator
favLanguages[Symbol.iterator] = () => {
  let len = favLanguages.length;
  return {
    next: () => ({
      value: favLanguages[--len],
      done: len < 0,
    }),
  };
};

for (let value of favLanguages) {
  console.log("favLanguages custom iterator>>", value);
}
