// Bài 3
// Yêu cầu: Giải quyết bài toán 1 trên bằng async/await
async function processUserData(userId) {
  const user = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: "John", age: 30 });
    }, 1000);
  });
  console.log("User:", user);

  const purchases = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, userId: userId, product: "Laptop", price: 1000 },
        { id: 2, userId: userId, product: "Phone", price: 2000 },6
      ]);
    }, 1000);
  });
  console.log("Purchases:", purchases);

  let total = 0;
  for (const purchase of purchases) {
    const product = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: purchase.id,
          name: purchase.product,
          price: purchase.price,
        });
      }, 1000);
    });
    console.log("Product Details:", product);
    total += product.price;
  }

  console.log("Total Price:", total);
}

// Thực hiện tuần tự bằng async/await
processUserData(1);
