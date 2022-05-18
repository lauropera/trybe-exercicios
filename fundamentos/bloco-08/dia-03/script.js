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
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const formatedBookNames = () => books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
// console.log(formatedBookNames());

const nameAndAge = () => books.map((book) => (
  {
    age: book.releaseYear - book.author.birthYear, 
    author: book.author.name
  }
  )).sort((obj1, obj2) => obj1.age - obj2.age);
// console.log(nameAndAge());

const fantasyOrScienceFiction = () => books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');
// console.log(fantasyOrScienceFiction());

const oldBooksOrdered = () => books.filter((book) => 2022 - book.releaseYear > 60).sort((obj1, obj2) => obj1.releaseYear - obj2.releaseYear);
// console.log(oldBooksOrdered());

const fantasyOrScienceFictionAuthors = () => fantasyOrScienceFiction().map((bookFC) => bookFC.author.name).sort();
// console.log(fantasyOrScienceFictionAuthors());

const oldBooks = () => oldBooksOrdered().map((book) => book.name).sort();
// console.log(oldBooks());

const authorWith3DotsOnName = () => books.find((book) => {
  const nome = book.author.name;
  return nome.includes(`${nome[0]}. ${nome[3]}. ${nome[6]}.`)
}).name;
// console.log(authorWith3DotsOnName());