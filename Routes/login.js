const router = require("express").Router();
const {Account} = require('../Models/model')
const accountController = require('../Controllers/accountController');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

// Thêm phần middleware cookie-parser để xử lý cookie
 router.use(cookieParser());


 router.get("/",accountController.getAll);
 router.post("/login",accountController.login);
 //router.get('/private',accountController.checkLogin, accountController.welcome);

module.exports = router