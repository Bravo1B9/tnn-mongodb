const express = require('express');
const { connectToDb, getDb } = require('./db')

const app = express();

let db;
connectToDb((err) => {
  if(!err) {
    app.listen(3000, () => {
      console.log('Listening in port 3000');
    });
    db = getDb();
  }
});

app.get('/books', (req, res) => {
  let books = [];
  
  db.collection('books')
    .find()
    .sort({ author: 1 })
    .forEach(book => books.push(book))
    .then(() => {
      res.json(books);
    })
    .catch(() => {
      res.status(500).json({error: 'Could not fetch documents'});
    });
});