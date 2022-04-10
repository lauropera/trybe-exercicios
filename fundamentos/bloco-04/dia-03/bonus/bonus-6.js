const n = 2;
let isPrime = true;

if (n === 1) {
  isPrime = false;
} else {
  for (let index = 2; index < n; index += 1) {
    if (n % index === 0) {
      isPrime = false;
    }
  }
}
console.log(`${n} é primo? ${isPrime}`);
