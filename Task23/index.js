const number = [4, 2, 7, 6, 5, 8, 2, 1];

function sortArrNumber(arr) {
    // Tạo bản sao để tránh thay đổi mảng gốc
    let result = [...arr];

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) {
            if (result[j] > result[j + 1]) {
                // Hoán đổi
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}

const result = sortArrNumber(number);
console.log(result); // [1, 2, 2, 4, 5, 6, 7, 8]
