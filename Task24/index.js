// Sắp xếp không dùng sort
// Cho trước mảng các số nguyên, hãy viết hàm sortArrNumber(arr) sắp xếp mảng theo thứ tự tăng dần mà không sử dụng phương thức sort().

const number = [4, 2, 7, 6, 5, 8, 2, 1];

function sortArrNumber(arr) {
    if (arr.length === 1) {
        return "Mang co 1 phan tu, khong kiem tra duoc";
    }
    if (!Array.isArray(arr)) {
        return "Du lieu nhap vao khong hop le";
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const result = sortArrNumber(number);
console.log(result); // [1,2,2,4,5,6,7,8]