const authorController = require("../Controllers/authorController");
const { Author } = require("../Models/model");

const authorRoute = require("express").Router();

//Add

authorRoute.post("/",authorController.addAuthor)

module.exports = authorRoute;