
// Input
const users = [
    { fullname: "Hoang Thi K", age: 20, address: "LangSon" },
    { fullname: "Le Thi X", age: 22, address: "BacGiang" },
    { fullname: "Le Van Y", age: 21, address: "HaNoi" },
    { fullname: "Hoang Duc F", age: 22, address: "HaNoi" },
    { fullname: "Tran Duc B", age: 32, address: "LangSon" },
    { fullname: "Tran Duc B", age: 32, address: "LangSon" },
    { fullname: "Tran Thi E", age: 32, address: "LangSon" },
    { fullname: "Nguyen Ngoc V", age: 32, address: "LangSon" },
    { fullname: "Nguyen Minh E", age: 32, address: "LangSon" },
    { fullname: "Nguyen Duc H", age: 32, address: "LangSon" },
];
// Thực hiện viết hàm sortedUsers để sắp xếp người dùng theo bảng chữ cái
function sortedUsers(arrayUser) {
  return arrayUser.sort((a, b) => {
    const nameA = a.fullname.split(" ").pop().toLowerCase();
    const nameB = b.fullname.split(" ").pop().toLowerCase();
    return nameA.localeCompare(nameB, "vi");
  });
}

// Test
console.log(sortedUsers(users));
// [
//   { fullname: "Tran Duc B", age: 32, address: "LangSon" },
//   { fullname: "Tran Duc B", age: 32, address: "LangSon" },
//   { fullname: "Tran Thi E", age: 32, address: "LangSon" },
//   { fullname: "Nguyen Minh E", age: 32, address: "LangSon" },
//   { fullname: "Hoang Duc F", age: 22, address: "HaNoi" },
//   { fullname: "Nguyen Duc H", age: 32, address: "LangSon" },
//   { fullname: "Hoang Thi K", age: 20, address: "LangSon" },
//   { fullname: "Nguyen Ngoc V", age: 32, address: "LangSon" },
//   { fullname: "Le Thi X", age: 22, address: "BacGiang" },
//   { fullname: "Le Van Y", age: 21, address: "HaNoi" }
// ]