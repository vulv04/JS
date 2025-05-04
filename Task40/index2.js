// Bài 2
// Yêu cầu: Giải quyết bài toán 1 trên bằng Promise
function getUserPromise(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John", age: 30 });
    }, 1000);
  });
}

function getPurchasesPromise(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: userId, product: "Laptop", price: 1000 },
        { id: 2, userId: userId, product: "Phone", price: 2000 },
      ]);
    }, 1000);
  });
}

function getProductDetailsPromise(productId, productName, productPrice) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: productId, name: productName, price: productPrice });
    }, 1000);
  });
}

// Thực hiện tuần tự bằng Promise
getUserPromise(1)
  .then((user) => {
    console.log("User:", user);
    return getPurchasesPromise(user.id);
  })
  .then((purchases) => {
    console.log("Purchases:", purchases);
    let total = 0;

    const productPromises = purchases.map((purchase) =>
      getProductDetailsPromise(purchase.id, purchase.product, purchase.price)
    );

    return Promise.all(productPromises).then((products) => {
      products.forEach((product) => {
        total += product.price;
        console.log("Product Details:", product);
      });
      return total;
    });
  })
  .then((total) => {
    console.log("Total Price:", total);
  });
