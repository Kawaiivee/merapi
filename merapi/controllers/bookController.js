const bookController = (Book) => {
  const post = (req, res) => {
    // better to honestly add the constraint to the model
    if(req.body.title.length <= 0) {
      res.send(`Please provide a title for the book`);
    }

    const mongoQuery = { title: req.body.title };
    let duplicateFound = false;
    Book.find(mongoQuery, (err, booksFound) => {
      if(booksFound.length > 0){
        return res.send(`Book with title ${req.body.title} exists`);
      }
      else {
        const newBook = new Book(req.body);
        newBook.save();
        return res.json(newBook);
      }
    });
  }

  const get = (req, res) => {
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
  }
  // "revealing modules" pattern. expose what you need to -- i.e., only need to expose these endpoints that are used
  return { post, get };
}

module.exports = bookController;