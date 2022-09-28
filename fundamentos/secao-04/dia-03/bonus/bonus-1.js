let n = 5;
let linha = '';
let simbolo = '*';

for (let linhaIndex = 0; linhaIndex < 5; linhaIndex += 1) {
  linha += simbolo;
}
for (let linhaIndex = 5; linhaIndex > 0; linhaIndex -= 1) {
  console.log(linha);
}
