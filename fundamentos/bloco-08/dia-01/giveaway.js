const sortear = (number, randomNumber) => {
  if (number === randomNumber) {
    return 'Parabéns você ganhou!';
  }
  return 'Tente novamente.';
};

const sorteio = (number, sortear) => {
  const randomNumber = Math.floor(Math.random() * 5);
  return sortear(number, randomNumber);
};

console.log(sorteio(1, sortear));
