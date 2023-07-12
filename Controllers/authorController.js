const { Author } = require("../Models/model");

const authorController = {
  addAuthor: async (req, res) => {
    try {
      const { name, year } = req.body;
      console.log("Received data:", { name, year }); // Kiểm tra dữ liệu nhận được từ yêu cầu POST

      const newAuthor = new Author({
        name,
        year,
      });

      const savedAuthor = await newAuthor.save();
      console.log("Tác giả đã được thêm:", savedAuthor); // Kiểm tra dữ liệu tác giả đã được lưu vào cơ sở dữ liệu

      res.status(200).json(savedAuthor);
    } catch (error) {
      console.error("Lỗi khi thêm tác giả:", error); // In ra lỗi nếu có lỗi xảy ra
      res.status(500).json(error);
    }
  },

  getAllAuthors: async (req, res) => {
    try {
      const authors = await Author.find();
      res.status(200).json(authors);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

module.exports = authorController;
