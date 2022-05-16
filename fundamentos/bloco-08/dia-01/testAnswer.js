const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const minhasRespostas = ['A', 'C', 'C', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswer, studentAnswer) => {
  if (studentAnswer === 'N.A') { return 0 };
  if (studentAnswer === rightAnswer) { return 1 };
  if (studentAnswer !== rightAnswer) { return (-0.5) };
}

const finalScore = (rightAnswers, studentAnswers, checkAnswers) => {
  let score = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    score += checkAnswers(rightAnswers[i], studentAnswers[i]);
  }
  return score;
}