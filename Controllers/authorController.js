const {Author, Book} = require("../Models/model")

const authorController = {
    addAuthor: async(req,res)=>{
        res.status(200).json(req.body);
    },
}

module.exports = authorController;