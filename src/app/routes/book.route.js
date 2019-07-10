const express = require('express');

var router = express.Router();
//set the contoller exports
const bookController = require('../controllers/book.controller');

router.get('/books',bookController.getAllBooks);

router.get('/books/:id',bookController.getBookById);

//search book by title 
router.get('/books',
  bookController.getBookByTitle
);

router.post('/books',bookController.addBook);

router.put('/books/:id',bookController.updateBook);

router.delete('/books/:id',bookController.deleteBook)

module.exports = router;

