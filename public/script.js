const authorController = require("./authorController");
const form = document.getElementById("addAuthorForm");

// Gắn sự kiện submit cho biểu mẫu
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn việc gửi yêu cầu mặc định
  authorController.addAuthor(); // Gọi hàm addAuthor từ authorController
});