// Bài 1

//Yêu cầu: Thực hiện tuần tự theo các bước

// Viết các hàm lấy thông tin user
// Lấy danh sách các sản phẩm đã mua sau 1s (dựa theo user đó)
// Sau khi có danh sách sản phẩm thì lấy chi tiết từng sản phẩm
// Tính tổng các giá trị sản phẩm

// Bài 1
function getUser(userId, callback) {
  setTimeout(() => {
    callback({ id: userId, name: "John", age: 30 });
  }, 1000);
}

function getPurchases(userId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, userId: userId, product: "Laptop", price: 1000 },
      { id: 2, userId: userId, product: "Phone", price: 2000 },
    ]);
  }, 1000);
}

function getProductDetails(productId, productName, productPrice, callback) {
  setTimeout(() => {
    callback({ id: productId, name: productName, price: productPrice });
  }, 1000);
}
// Yêu cầu: Giải quyết bài toán 1 trên bằng callback
getUser(1, (user) => {
  console.log("User:", user);
  getPurchases(user.id, (purchases) => {
    console.log("Purchases:", purchases);
    let total = 0;
    purchases.forEach((purchase) => {
      getProductDetails(
        purchase.id,
        purchase.product,
        purchase.price,
        (product) => {
          total += product.price;
          console.log("Product Details:", product);
        }
      );
    });
    setTimeout(() => {
      console.log("Total Price:", total);
    }, 2000); // Đợi 2 giây để đảm bảo tất cả các sản phẩm đã được lấy chi tiết
  });
});


