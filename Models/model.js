const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name:{
        type:String
    },
    year:{
        type:Number
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        },
    ]
});
const bookSchema = new mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    publishedDate:{
        type:String,
    },
    genres: {
        type: [String]
    },
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author"
    }
});
const accountSchema = new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    }
});
 let Book = mongoose.model("Book",bookSchema);
 let Author = mongoose.model("Author",authorSchema);
 const Account = mongoose.model("Account", accountSchema);

 module.exports = {Book,Author,Account};