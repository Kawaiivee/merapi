const express = require('express');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const connectionString = process.env.CONNECTION_STRING || `mongodb://root:root@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`;
const dbName = process.env.DB_NAME || `bookAPI`;

const db = mongoose.connect(connectionString, {
  dbName: dbName,
});
const Book = require('./models/bookModel');

const app = express();
const bookRouter = express.Router();

// get many books filter
bookRouter.route('/books')
  .get((req, res) => {
    //const query = req.query;    //or const { query } = req;
    //better practice to clean up what is actually checked for in query
    const query = {};
    if(req.query.genre){
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if(err){
        return res.send(err);
      }
      return res.json(books);
    });
  });

// get single book by id
bookRouter.route('/book/:bookId')
  .get((req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
      if(err){
        return res.send(err);
      }
      return res.json(book);
    });
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Hello from merapi');
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
