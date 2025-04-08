// * Viết hàm checkSymmetricalArr(arr) để kiểm tra mảng có đối xứng hay không ?

const arrayNumber = [1, 2, 3, 4, 3, 2, 1];
function checkSymmetricalArr(arr) {
    if (arr.length === 1) {
        return "Mang co 1 phan tu, khong kiem tra duoc";
    }
    if (!Array.isArray(arr)) {
        return "Du lieu nhap vao khong hop le";
    }
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
const result = checkSymmetricalArr(arrayNumber);
console.log(result); //true