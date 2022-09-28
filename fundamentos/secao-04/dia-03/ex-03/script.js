let array = ['java', 'javascript', 'python', 'css', 'html'];
let maiorPalavra = '';
let menorPalavra = array[0];

for (let index of array) {
  if (maiorPalavra.length < index.length) {
    maiorPalavra = index;
  }
  if (menorPalavra.length > index.length) {
    menorPalavra = index;
  }
}
console.log(`A maior palavra é '${maiorPalavra}'`);
console.log(`A menor palavra é '${menorPalavra}'`);
