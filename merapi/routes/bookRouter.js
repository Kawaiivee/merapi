/* eslint-disable no-param-reassign */
const express = require('express');
const bookController = require('../controllers/bookController');

const routes = (Book) => {
  const bookRouter = express.Router();
  
  //pass Book model into bookController as a dependency
  const controller = bookController(Book);

  // get many books filter
  bookRouter.route('/books')
    .post(controller.post)
    .get(controller.get);
  bookRouter.use('/book/:bookId', (req, res, next) => {
    //makes everything available to the related routes downstream
    Book.findById(req.params.bookId, (err, book) => {
      if(err) {
        return res.send();
      }
      if(book) {
        req.book = book;
        return next();
      }
      return res.sendStatus(404, "Book Not Found");
    })
  });
  // get single book by id
  bookRouter.route('/book/:bookId')
    .get((req, res) => {
      return res.json(req.book);
    })
    // old get before the middleware 'use' above
    // .get((req, res) => {
    //   Book.findById(req.params.bookId, (err, book) => {
    //     if(err){
    //       return res.send(err);
    //     }
    //     return res.json(book);
    //   });
    // })
    .put((req, res) => {
      // no longer need this error checking since it's done in the middleware
      // if(err){
      //   return res.send(err);
      // }

      // need this though from middleware
      // there's no default values here, so you need to use either the old book model or add ALL the fields to the request
      // patch is useful for small changes to the given object...patch's implementation goes CRAZY
      const { book } = req;
      book.title = req.body.title;
      book.author = req.body.author;
      book.genre = req.body.genre;
      book.read = req.body.read;
      book.save();
      return res.json(book);
    })
    .patch((req, res) => {
      //idrc about this one, we never use patch anyway
      const { book } = req;
      if (req.body._id) {
        delete req.body._id;
      }
      Object.entries(req.body).forEach((item) => {
        const key = item[0];
        const value = item[1];
        book[key] = value;
      });
      req.book.save((err) => {
        if(err) {
          return res.send(err);
        }
        return res.json(book);
      });
    })
    .delete((req, res) => {
      //can get all fancy with filtered deletes by ID and such
      req.book.remove((err) => {
        if(err) {
          return res.send(err);
        }
        //successful delete code
        return res.sendStatus(204);
      });
    });
  
  return bookRouter;
}

module.exports = routes;

