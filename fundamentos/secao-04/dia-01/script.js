// Programa 1
const a = 5;
const b = 8;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Programa 2
const c = 10;
const d = 11;

if (c > d) {
  console.log(c);
} else {
  console.log(d);
}

// Programa 3
const e = 1;
const f = 2;
const g = 4;

if (e > f && e > g) {
  console.log(e);
} else if (f > e && f > g) {
  console.log(f);
} else {
  console.log(g);
}

// Programa 4
const h = -10;

if (h > 0) {
  console.log('positive');
} else if (h < 0) {
  console.log('negative');
} else {
  console.log('zero');
}

// Programa 5
const alpha = 60;
const beta = 60;
const teta = -60;

if (alpha < 0 || beta < 0 || teta < 0) {
  console.log('Os angulos precisam ser positivos!');
} else {
  if (alpha + beta + teta === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Programa 6
const chessPiece = 'rook';

switch (chessPiece) {
  case 'king':
    console.log('one square in any direction');
    break;
  case 'queen':
    console.log('diagonally, horizontally, or vertically');
    break;
  case 'rook':
    console.log('horizontally or vertically');
    break;
  case 'bishop':
    console.log('diagonally');
    break;
  case 'knight':
    console.log('in an "L shape"');
    break;
  case 'pawn':
    console.log('vertically forward');
    break;
}

// Programa 7
const nota = 95;

if (nota < 0 || nota > 100) {
  console.log('Nota inválida');
} else {
  if (nota >= 90) {
    console.log('A');
  } else if (nota >= 80) {
    console.log('B');
  } else if (nota >= 70) {
    console.log('C');
  } else if (nota >= 60) {
    console.log('D');
  } else if (nota >= 50) {
    console.log('E');
  } else {
    console.log('F');
  }
}

// Programa 8
const num1 = 2;
const num2 = 5;
const num3 = 8;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

// Programa 9
const num4 = 2;
const num5 = 4;
const num6 = 8;

if (num4 % 2 !== 0 || num5 % 2 !== 0 || num6 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}

// Programa 10
const custoProduto = 15;
const valorVenda = 28;

if (custoProduto < 0 || valorVenda < 0) {
  console.log('Não é um valor válido.');
} else {
  const imposto = 20;
  const lucro = valorVenda - (custoProduto + custoProduto * (imposto / 100));
  console.log(lucro);
}

// Programa 11
const salario = 2000;

if (salario <= 1556.94) {
  const aliquotaInss = 8;
  const salarioBase = salario - salario * (aliquotaInss / 100);
  console.log(salarioBase);
} else if (salario <= 1903.98) {
  const aliquotaInss = 9;
  const salarioBase = salario - salario * (aliquotaInss / 100);
  console.log(salarioBase);
} else if (salario <= 2594.92) {
  const aliquotaInss = 9;
  const aliquotaIR = 7.5;
  const parcela = 142.8;
  const salarioBase = salario - salario * (aliquotaInss / 100);
  const salarioLiquido = salarioBase - (salarioBase * (aliquotaIR / 100) - parcela);
  console.log(salarioLiquido);
} else if (salario <= 3751.05) {
  const aliquotaInss = 11;
  const aliquotaIR = 15;
  const parcela = 354.8;
  const salarioBase = salario - salario * (aliquotaInss / 100);
  const salarioLiquido = salarioBase - (salarioBase * (aliquotaIR / 100) - parcela);
  console.log(salarioLiquido);
} else if (salario <= 4664.68) {
  const aliquotaInss = 11;
  const aliquotaIR = 22.5;
  const parcela = 636.13;
  const salarioBase = salario - salario * (aliquotaInss / 100);
  const salarioLiquido = salarioBase - (salarioBase * (aliquotaIR / 100) - parcela);
  console.log(salarioLiquido);
} else if (salario > 4664.68) {
  const aliquotaInss = 11;
  const aliquotaIR = 27.5;
  const parcela = 869.36;
  const salarioBase = salario - salario * (aliquotaInss / 100);
  const salarioLiquido = salarioBase - (salarioBase * (aliquotaIR / 100) - parcela);
  console.log(salarioLiquido);
} else {
  const aliquotaInss = 570.88;
  const aliquotaIR = 27.5;
  const parcela = 869.36;
  const salarioBase = salario - aliquotaInss;
  const salarioLiquido = salarioBase - (salarioBase * (aliquotaIR / 100) - parcela);
  console.log(salarioLiquido);
}
