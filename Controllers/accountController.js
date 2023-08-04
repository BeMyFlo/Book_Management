    const express = require('express');
    const { Account } = require('../Models/model');
    const jwt = require('jsonwebtoken');
    const cookieParser = require('cookie-parser');

    const router = express.Router();

    // Thêm phần middleware cookie-parser để xử lý cookie
    router.use(cookieParser());


        const accountController = {
            getAll: (req, res, next) => {
                // Sử dụng phương thức find() của Mongoose để lấy tất cả các tài khoản từ cơ sở dữ liệu
                Account.find({})
                .then(data => {
                    // Trả về dữ liệu dạng JSON nếu thành công
                    res.status(200).json(data);
                })
                .catch(err => {
                    // Trả về mã lỗi 500 nếu có lỗi xảy ra
                    res.status(500).json('Đã xảy ra lỗi');
                });
            },
            login:  (req, res, next) => {
                var username = req.body.username; // Lấy giá trị của trường 'username' từ yêu cầu POST
                var password = req.body.password; // Lấy giá trị của trường 'password' từ yêu cầu POST
            
                Account.findOne({
                username: username,
                password: password
                })
                .then(data => {
                    if (data) {
                    // Tìm thấy tài khoản, có thể thực hiện các thao tác với data tại đây
                    const token = jwt.sign({ _id: data._id }, 'mk'); 
                    res.cookie('token', token, { httpOnly: true });
                    res.json({
                        message:'Login successfully !!!',
                        token: token
                    })
                    } else {
                    // Không tìm thấy tài khoản, có thể xử lý thông báo hoặc trả về lỗi 404
                    res.status(404).json('Tài khoản không tồn tại');
                    } 
                })
                .catch(err => {
                    console.error(err);
                    res.status(500).json('Đã xảy ra lỗi');
                });
            },
            checkLogin: (req, res, next) => {
                try {
                  var token = req.cookies.token;
                  var result = jwt.verify(token, 'mk');
                  if (result) {
                    // Nếu xác thực thành công, chuyển tiếp yêu cầu bằng cách gọi next()
                    next();
                  } else {
                    res.json('You need to login');
                  }
                } catch (error) {
                  console.log('Error:', error); // In ra console nếu có lỗi xảy ra
                  res.json('You need to login');
                }
              },
            
              // Middleware tiếp theo để xử lý request sau khi xác thực thành công
              welcome: (req, res, next) => {
                res.json('Welcome');
              }
              
        }

        module.exports = accountController;