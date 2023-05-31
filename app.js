const { Console } = require('console')
const express = require('express')

const app = express()

let books = []

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Welcome to books API')
})

// Create a new book
app.post('/books', (req, res) => {
  const book = req.body
  books.push(book)
  res.status(201).send(book)
})

// Get all books
app.get('/books', (req, res) => {
  res.send(books)
})

// Get a single book
app.get('/books/:id', (req, res) => {
  const id = req.params.id
  const book = books.find(book => book.id == id)
  res.json(book)
})

// Update a book
app.put('/books/:id', (req, res) => {
  const id = req.params.id
  const book = books.find(book => book.id == id)
  book.title = req.body.title
  res.send(book)
})

// Delete a book
app.delete('/books/:id', (req, res) => {
  const id = req.params.id
  console.log(books)
  books = books.filter(book => book.id != id)
  res.send({ message: 'Book deleted' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})