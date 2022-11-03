const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const validateFields = require('./middlewares/validateFields');

const app = express();

app.use(express.json());

const PORT = '3009';
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

const booksFile = path.resolve(__dirname, './books.json');

// Exercício 5
app.get('/books/search', async (req, res) => {
  const { author } = req.query;
  const booksJson = await fs.readFile(booksFile, 'utf-8');
  const books = JSON.parse(booksJson);
  const search = books.filter((book) => book.author.includes(author));
  res.status(200).json(search);
});

// Exercício 4
app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  const booksJson = await fs.readFile(booksFile, 'utf-8');
  const books = JSON.parse(booksJson);
  const newBooksFile = books.filter((book) => book.id !== id);
  await fs.writeFile(booksFile, JSON.stringify(newBooksFile));
  res.sendStatus(204);
});


// Exercício 1
app.get('/books', async (_req, res) => {
  const books = await fs.readFile(booksFile, 'utf-8');
  const response = books ? JSON.parse(books) : [];
  res.status(200).json(response);
});

app.use(validateFields); // Exercício bônus 6

// Exercício 2
app.post('/books', async (req, res) => {
  const books = await fs.readFile(booksFile, 'utf-8');
  const id = books ? JSON.parse(books).length + 1 : 0;
  const newBook = { ...req.body, id }
  const newBooksFile = [...JSON.parse(books), newBook]
  await fs.writeFile(booksFile, JSON.stringify(newBooksFile));
  res.status(201).json(newBook);
});

// Exercício 3
app.put('/books/:id', async (req, res) => {
  const { id } = req.params;
  const booksJson = await fs.readFile(booksFile, 'utf-8');
  const books = JSON.parse(booksJson);
  const bookToUpdate = books.find((book) => book.id === id);
  const bookUpdated = { id: bookToUpdate.id, ...req.body };
  const newBooksFile = books.map((book) => book.id === id ? bookUpdated : book);
  await fs.writeFile(booksFile, JSON.stringify(newBooksFile));
  res.status(200).json(bookUpdated);
});
