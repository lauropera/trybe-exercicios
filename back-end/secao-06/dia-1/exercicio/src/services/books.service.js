const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({ order: [['title', 'ASC']] });
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const getByAuthor = async (author) => {
  const book = await Book.findOne({
    where: { author },
    order: [['title', 'ASC']],
  });
  return book;
};

const createBook = async (title, author, pageQuantity, publisher) => {
  const book = await Book.create({ title, author, pageQuantity, publisher });
  return book;
};

const editBook = async (id, title, author, pageQuantity, publisher) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } }
  );
  return updatedBook;
};

const deleteBook = async (id) => {
  const book = await Book.destroy({ where: { id } });
  return book;
};

module.exports = {
  getAll,
  getById,
  createBook,
  editBook,
  deleteBook,
  getByAuthor,
};
