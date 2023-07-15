const bookController = require("../Controllers/bookController")
const { Book } = require("../Models/model")
const router = require("express").Router();
//Add a book
router.post('/',bookController.addBook)
//All Book
router.get('/',bookController.getAllBooks)
//one book
router.get("/:id",bookController.getOneBook)
//update book
router.put("/:id",bookController.putABook)
router.delete("/:id",bookController.deleteBook)
module.exports = router;