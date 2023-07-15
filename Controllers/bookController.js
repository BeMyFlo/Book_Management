const { Book, Author } = require("../Models/model");

const bookController = {
  addBook: async (req,res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if (req.body.author) {
                const author = await Author.findById(req.body.author);
                await author.updateOne({ $push: { books: savedBook._id } });
            }
            res.status(200).json(savedBook);
        }catch(err){
            res.status(500).json(err);
        }
    },
    getAllBooks: async (req,res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
          } catch (err) {
            res.status(500).json(err);
          }
    },
    getOneBook: async (req,res) => {
        try{
            const book = await Book.findById(req.params.id);
            res.status(200).json(book);
        }catch{
            res.status(500).json(err);
        }
    },
    putABook: async (req, res) => {
        try {
          const book = await Book.findById(req.params.id);
          await book.updateOne({ $set: req.body });
          res.status(200).json("Update successfully!");
        } catch (err) {
          console.log(err);
          res.status(500).json({ error: err.message });
        }
      },
      deleteBook: async (req, res) => {
        try {
          const book = await Book.findById(req.params.id);
          if (!book) {
            // Kiểm tra xem tác giả có tồn tại không
            return res.status(404).json("Book not found!");
          }
      
          await book.deleteOne(); 
      
          res.status(200).json("Book deleted successfully!");
        } catch (err) {
          console.log(err);
          res.status(500).json({ error: err.message });
        }
      }
};
    

module.exports = bookController;