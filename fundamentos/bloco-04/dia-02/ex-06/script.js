let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddQuantity = 0;

for (let index of numbers) {
  if (index % 2 !== 0) {
    oddQuantity += 1;
  }
}

if (oddQuantity > 0) {
  console.log(oddQuantity);
} else {
  console.log('Nenhum valor ímpar encontrado');
}
