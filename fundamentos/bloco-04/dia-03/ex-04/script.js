let maiorPrimo = 0;

for (let index = 2; index <= 13; index += 1) {
  let qddDivisores = 0;
  for (let i = 1; i < index; i += 1) {
    if (index % i === 0) {
      qddDivisores += 1;
    }
  }
  if (qddDivisores === 1 && index > maiorPrimo) {
    maiorPrimo = index;
  }
}
console.log(maiorPrimo);
