// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(word) {
  let reverseWord = word.split('').reverse().join('');

  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromo('ovo'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function higherValue(numbers) {
  let higherNumber = 0;
  for (let index in numbers) {
    if (numbers[index] > higherNumber) {
      higherNumber = index;
    }
  }
  return higherNumber;
}

console.log(higherValue([2, 3, 6, 7, 10, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowerValue(numbers) {
  let lowerIndex = 0;
  for (let index in numbers) {
    if (numbers[index] < numbers[lowerIndex]) {
      lowerIndex = index;
    }
  }
  return lowerIndex;
}

console.log(lowerValue([2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maisLetras(names) {
  let maiorNome = '';
  for (let index in names) {
    if (names[index].length > maiorNome.length) {
      maiorNome = names[index];
    }
  }
  return maiorNome;
}

console.log(
  maisLetras(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])
);

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(numeros) {
  let numeroRepetido = 0;
  let qddVezesApareceu = 0;
  let qddRepetida = 0;
  for (let index in numeros) {
    for (let secondIndex in numeros) {
      if (numeros[index] === numeros[secondIndex]) {
        qddRepetida += 1;
      }
    }
    if (qddRepetida > qddVezesApareceu) {
      numeroRepetido = numeros[index];
      qddVezesApareceu = qddRepetida;
    }
    qddRepetida = 0;
  }
  return numeroRepetido;
}

console.log(maisRepetido([2, 3, 2, 5, 2, 3, 3]));

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function fatorialSoma(numero) {
  let soma = numero;
  for (let index = numero - 1; index > 0; index -= 1) {
    soma += index;
  }
  return soma;
}

console.log(fatorialSoma(5));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function checkingStrings(word, ending) {
  let reversedWord = word.split('').reverse().join('');
  let reversedEnding = ending.split('').reverse().join('');

  for (let index = 0; index < reversedEnding.length; index += 1) {
    if (
      reversedEnding[index] === reversedWord[index] &&
      word.length > ending.length
    ) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkingStrings('trybe', 'be'));
