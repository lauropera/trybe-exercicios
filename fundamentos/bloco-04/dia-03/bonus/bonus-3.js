let n = 5;

for (let index = 0; index < n; index += 1) {
  let triangle = '';
  for (let contador = n - 1; contador >= 0; contador -= 1) {
    if (contador > index) {
      triangle += ' ';
    } else {
      triangle += '*';
    }
  }
  console.log(triangle);
}