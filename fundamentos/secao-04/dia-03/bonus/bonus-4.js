let n = 5;
let simbolo = '*';
let linha = '';

let logicaMatriz = (n + 1) / 2;
let esquerda = logicaMatriz;
let direita = logicaMatriz;

for (let linhaIndex = 0; linhaIndex <= logicaMatriz; linhaIndex += 1) {
  for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1) {
    if (colunaIndex > esquerda && colunaIndex < direita) {
      linha += simbolo;
    } else {
      linha += ' ';
    }
  }
  console.log(linha);
  linha = '';
  esquerda -= 1;
  direita += 1;
}
