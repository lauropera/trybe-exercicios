const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1908,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1950,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1909,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1911,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1923,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const authorBornIn1947 = books.find((book) => book.author.birthYear === 1947);
// console.log(authorBornIn1947);

const smallerName = () => {
  let nameBook;
  books.forEach( (book) => {
    if (!nameBook || nameBook.length > book.name.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
}

// smallerName()

// const someBookWasReleaseOnThe80s = books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
// console.log(someBookWasReleaseOnThe80s);

const getNamedBook = books.find((book) => book.name.length === 26);
// console.log(getNamedBook.name);

// function comparar(a, b) {
//   if (a.releaseYear < b.releaseYear) {
//     return 1;
//   }
//   if (a.releaseYear > b.releaseYear) {
//     return -1; 
//   }
//   return 0;
// }

const byReleaseYearDesc = books.sort((a, b) => b.releaseYear - a.releaseYear);
// console.log(byReleaseYearDesc)

const everyoneWasBornOnSecXX = books.every((book) => book.author.birthYear >= 1901 && book.author.birthYear <= 2000);
// console.log(everyoneWasBornOnSecXX);

// const someBookWasReleaseOnThe80s
// objetoOrdenado[index].author.birthYear !== objetoOrdenado[index + 1].author.birthYear

// const authorUnique = () => {
//   const objeto = books.sort((a, b) => a.author.birthYear - b.author.birthYear);
//   objeto.every((element, index) => objeto[index].author.birthYear !== objeto[index + 1].author.birthYear)
// }

// console.log(authorUnique());

const techProducts = [
    {
        id: 1, // numérico
        name: 'computer', // string
        price: 2100, // number
    },
    {
        id: 2,
        name: 'mouse',
        price: 56,
    },
    {
        id: 3,
        name: 'monitor',
        price: 589,
    },
    {
        id: 4,
        name: 'keyboard',
        price: 78,
    },
    {
        id: 5,
        name: 'HD',
        price: 350,
    },
    {
        id: 6,
        name: 'webcam',
        price: 187,
    },
    {
        id: 7,
        name: 'mic',
        price: 69,
    },
    {
        id: 8,
        name: 'headset',
        price: 216,
    },
];
/*
* 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
* 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
* 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
// ex: id: 8 e quantidade: 2 preço total: 432
*/

const produtosPares = [];
const idPares = techProducts.forEach((product) => {
  if (product.id % 2 === 0) {produtosPares.push(product)}
})
console.log(produtosPares)