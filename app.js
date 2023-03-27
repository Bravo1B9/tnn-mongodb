const express = require('express');

const app = express();

app.get('/books', (req, res) => {
  res.json({ message: 'All the books' });
})

app.listen(3000, () => {
  console.log('Listening in port 3000');
});