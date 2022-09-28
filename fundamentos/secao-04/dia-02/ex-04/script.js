let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalSum = 0;

for (let index of numbers) {
  totalSum += index;
}
let average = totalSum / numbers.length;

if (average > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor ou igual a 20');
}
