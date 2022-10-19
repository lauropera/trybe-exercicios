const BookService = require('../services/books.service');

const error500Message = 'Algo deu errado.';

const getAll = async (req, res) => {
  try {
    const { q } = req.query;
    const books = q
      ? await BookService.getByAuthor(q)
      : await BookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
    if (book) return res.status(200).json(book);
    return res.status(404).json({ message: 'Book not found.' });
  } catch (error) {
    console.error(error);
    return res.status(404).json({ message: error500Message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const newBook = await BookService.createBook(
      title,
      author,
      pageQuantity,
      publisher
    );
    return res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error500Message });
  }
};

const editBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity, publisher } = req.body;
    const updatedBook = await BookService.editBook(
      id,
      title,
      author,
      pageQuantity,
      publisher
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Livro não encontrado.' });
    }

    return res.status(200).json({ message: 'Livro atualizado!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error500Message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.deleteBook(id);
    return res.status(200).json({ message: 'Livro excluído!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  editBook,
  deleteBook,
};
