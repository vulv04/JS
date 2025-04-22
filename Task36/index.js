const students = [
  { id: 1, name: "Nguyễn Văn A", age: 20, city: "Hà Nội" },
  { id: 2, name: "Trần Thị B", age: 19, city: "TP.HCM" },
  { id: 3, name: "Lê Văn C", age: 21, city: "Đà Nẵng" },
];

// Tạo bảng

// Lấy phần tử bảng từ DOM
const dataTable = document.getElementById("dataTable");

// Tạo tiêu đề bảng
const headerRow = document.createElement("tr");
const headers = ["ID", "Name", "Age", "City"];
headers.forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});
dataTable.appendChild(headerRow);

// Tạo các hàng dữ liệu
students.forEach((student) => {
  const row = document.createElement("tr");

  Object.values(student).forEach((value) => {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  });

  dataTable.appendChild(row);
});
