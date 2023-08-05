const accountController = require('../Controllers/accountController');
const authorController = require("../Controllers/authorController");
const { Author } = require("../Models/model");

const router = require("express").Router();

//Add
router.post("/createAuthor",authorController.addAuthor)
//All author
router.get("/",accountController.checkLogin,authorController.getAllAuthors)
//1 author
router.get("/:id",authorController.getOneAuthor)
//update
router.put("/:id",authorController.putAuthor)
//Delete
router.delete("/:id",authorController.deleteAuthor)
module.exports = router;