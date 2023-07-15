document.getElementById("addAuthorForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Ngăn chặn sự kiện submit mặc định của form

  const name = document.getElementById("name").value;
  const year = document.getElementById("year").value;

  try {
    const response = await axios.post("/v1/author/createAuthor", { name, year });
    console.log(response.data); // Log dữ liệu trả về từ máy chủ

    // Hiển thị thông báo thành công
    const successMessage = document.createElement("p");
    successMessage.textContent = "Author created successfully";
    successMessage.classList.add("success-message");
    document.body.appendChild(successMessage);

    // Xóa thông báo thành công sau 3 giây
    setTimeout(() => {
      successMessage.remove();
    }, 3000);

    // Thực hiện các hành động khác sau khi thêm tác giả thành công

  } catch (error) {
    console.error(error);
    // Xử lý lỗi nếu có lỗi xảy ra khi thêm tác giả
  }
});