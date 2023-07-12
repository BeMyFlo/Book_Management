const authorController = require("../Controllers/authorController");
const { Author } = require("../Models/model");

const authorRoute = require("express").Router();

//Add

authorRoute.post("/",authorController.addAuthor)

//Get all authors

authorRoute.get("/",authorController.getAllAuthors)

module.exports = authorRoute;   