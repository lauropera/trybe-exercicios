let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}

for (let index of numbers) {
  console.log(index / 2);
}
