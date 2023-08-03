const router = require("express").Router();
const {Account} = require('../Models/model')

router.get("/", (req, res, next) => {
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
  });
  router.post("/post", (req, res, next) => {
    var username = req.body.username; // Lấy giá trị của trường 'username' từ yêu cầu POST
    var password = req.body.password; // Lấy giá trị của trường 'password' từ yêu cầu POST
  
    Account.findOne({
      username: username,
      password: password
    })
      .then(data => {
        if (data) {
          // Tìm thấy tài khoản, có thể thực hiện các thao tác với data tại đây
          console.log(data.username);
          console.log(data.password);
          res.status(200).json(data);
        } else {
          // Không tìm thấy tài khoản, có thể xử lý thông báo hoặc trả về lỗi 404
          res.status(404).json('Tài khoản không tồn tại');
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json('Đã xảy ra lỗi');
      });
  });
  

module.exports = router