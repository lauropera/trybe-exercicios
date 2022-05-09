// Ex.1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
};

testingScope(true);

// Ex.2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortArray = (array) => array.sort((a, b) => a - b);
sortArray(oddsAndEvens);

console.log(
  `Os números ${sortArray(
    oddsAndEvens
  )} se encontram ordenados de forma crescente`
);
// será necessário alterar essa linha 😉

// Ex.3

const fatorial = (number) => {
  let i = number;
  while (number > 2) {
    i *= number -= 1;
  }
  return i;
};

console.log(fatorial(4));

// Ex. 4

const getLongestWord = (word) => {
  const wordSplit = word.split(' ');
  let longestWord = '';
  for (let i of wordSplit) {
    if (wordSplit[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
};

console.log(
  getLongestWord('Antônio foi no banheiro e não sabemos o que aconteceu')
);

// Ex.5 no index.html

// Ex. 6

const greetingMessage = (name) => {
  return `Tryber ${name} aqui!`;
};

const mySkills = ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'];

const showSkills = (greeting) => {
  const sortedSkills = mySkills.sort();
  return `${greeting}
Minhas principais habilidades são: ${sortedSkills.join(', ')}`;
};

(showSkills(greetingMessage('Lauro')));
