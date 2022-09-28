let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let contador = 0; contador < index; contador += 1) {
    if (numbers[index] < numbers[contador]) {
      let position = numbers[index];
      numbers[index] = numbers[contador];
      numbers[contador] = position;
    }
  }
}

console.log(numbers);
