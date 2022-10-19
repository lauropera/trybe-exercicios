const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const BookController = require('./controllers/books.controller');

app.use(express.json());

app.get('/books', BookController.getAll);

app.get('/books/:id', BookController.getById);

app.post('/books', BookController.createBook);

app.put('/books/:id', BookController.editBook);

app.delete('/books/:id', BookController.deleteBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
