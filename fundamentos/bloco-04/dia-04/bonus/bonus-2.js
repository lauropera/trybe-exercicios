// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];

function arrayOfNumbers(vector) {
  let evenNumbers = [];

  for (let arrayIndex in vector) {
    for (let index in vector[arrayIndex]) {
      if (vector[arrayIndex][index] % 2 === 0) {
        evenNumbers.push(vector[arrayIndex][index]);
      }
    }
  }
  return evenNumbers;
}

console.log(arrayOfNumbers(vector));