const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const flatten = (array) => {
  return array.reduce((acc, curr) => acc.concat(curr), []); // Junta varios arrays em um só.
};

// console.log(flatten(arrays));

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

const reduceNames = (array) => {
  return array.reduce((result, currentAuthor, index) => {
    if (index === array.length - 1) {
      return `${result} ${currentAuthor.author.name}.`;
    }
    return `${result} ${currentAuthor.author.name},`;
  }, 'Autores:');
};
// console.log(reduceNames(books));

const averageAge = (array) => {
  return array.reduce((ageSum, person, index) => {
    const age = person.releaseYear - person.author.birthYear;
    if (index === array.length - 1) return (ageSum + age) / array.length; 
    return ageSum + age;
  }, 0);
};
// console.log(averageAge(books));

const longestNamedBook = (array) => {
  return array.reduce((longestBook, book) => {
    if (book.name.length > longestBook.name.length) {
      return book;
    }
    return longestBook;
  })
}
console.log(longestNamedBook(books));

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (array) => {
  return array
    .reduce((accumulator, name) => accumulator + name.match(/a/ig).length, 0);
}
// console.log(containsA(names));

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = students.map((student, index) => ({
  name: student,
  average: grades[index]
    .reduce((acc, currGrade) => acc + currGrade, 0) / grades[index].length
}))
console.log(studentAverage);
