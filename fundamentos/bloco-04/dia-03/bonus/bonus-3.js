let n = 5;
let linha = '';
let simbolo = '*';


for (let linhaIndex = 0; linhaIndex < n; linhaIndex += 1) {
  for (let colunaIndex = n - 1; colunaIndex >= 0; colunaIndex -= 1) {
    if (colunaIndex > linhaIndex) {
      linha += ' ';
    } else {
      linha += simbolo;
    }
  }
  console.log(linha);
  linha = '';
}