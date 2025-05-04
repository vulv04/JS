// Bài 1 Yêu cầu:

// Viết một hàm getData nhận vào một callback và gọi callback đó sau 1 giây với dữ liệu là mảng [1, 2, 3, 4].
function getData(callback) {
  setTimeout(() => {
    const data = [1, 2, 3, 4];
    callback(data);
  }, 1000); // Gọi callback sau 1 giây
}

// Sử dụng
getData((data) => {
  console.log(data); // Sau 1 giây in ra: [1, 2, 3, 4]
});

// Bài 2 Yêu cầu:

// Viết một hàm getData như bài 1 nhưng sử dụng Promise
function getData(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4];
      resolve(data);
    }, 1000);
  });
}
// Sử dụng
getData()
  .then((data) => console.log(data)) // Sau 1 giây in ra: [1, 2, 3, 4]
  .catch((error) => console.error(error));

// Bài 3 Yêu cầu:

// Viết một hàm getData như bài 1 nhưng sử dụng async/await
async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
        const data = [1, 2, 3, 4];
        resolve(data);
        }, 1000);
    });
    }
// Sử dụng
(async () => {
  const data = await getData(); // Sau 1 giây in ra: [1, 2, 3, 4]
  console.log(data);
})();