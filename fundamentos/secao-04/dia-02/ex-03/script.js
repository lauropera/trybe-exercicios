let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalSum = 0;

for (let index of numbers) {
  totalSum += index;
}

let average = totalSum / numbers.length;
console.log(average);
