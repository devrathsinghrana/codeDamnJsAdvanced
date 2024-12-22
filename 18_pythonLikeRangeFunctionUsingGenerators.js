function* generatorFn() {
  yield 10;
  yield 20;
  yield 30;
}

const it = generatorFn();

console.log("it.next()>>>", it.next());
console.log("it.next()>>>", it.next());
console.log("it.next()>>>", it.next());
console.log("it.next()>>>", it.next());
console.log("it.next()>>>", it.next());
console.log("it.next()>>>", it.next());
console.log("it.next()>>>", it.next());
console.log("it.next()>>>", it.next());
console.log("it.next()>>>", it.next());
console.log("it.next()>>>", it.next());
console.log("it.next()>>>", it.next());

const mit = generatorFn(); //need to make new one as previous one "it" got exhausted

for (const value of mit) {
  console.log("value of mit>>>", value);
}

function* genRange(start, stop, stepper = 1) {
  for (let i = start; i < stop; i += stepper) {
    yield i;
  }
}

const dit = genRange(1, 4);

console.log("dit.next()>>>", dit.next());
console.log("dit.next()>>>", dit.next());
console.log("dit.next()>>>", dit.next());
console.log("dit.next()>>>", dit.next());
console.log("dit.next()>>>", dit.next());
console.log("dit.next()>>>", dit.next());
console.log("dit.next()>>>", dit.next());
console.log("dit.next()>>>", dit.next());
console.log("dit.next()>>>", dit.next());
console.log("dit.next()>>>", dit.next());

const kit = genRange(1, 4);

console.log("[...kit]", [...kit]);

const lit = genRange(1, 4);

for (const value of lit) {
  console.log("value of lit>>>", value);
}
