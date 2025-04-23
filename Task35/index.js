/**
 * Tạo một thẻ <div> với id="clock" để hiển thị đồng hồ số.
Sử dụng JavaScript để cập nhật giờ hiện tại vào thẻ này mỗi giây một lần bằng cách sử dụng setInterval.
 */
//Đồng Hồ Số
setInterval(() => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);
document.getElementById("clock").innerText = "00:00:00"; // Khởi tạo giá trị ban đầu
