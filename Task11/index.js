function isTriangle(a, b, c) {
    // Điều kiện để tạo thành tam giác
    return a + b > c && a + c > b && b + c > a;
}

// Test cases
console.log(isTriangle(3, 4, 5)); // true (tam giác vuông)
console.log(isTriangle(3, 4, 7)); // false (không tạo thành tam giác)
console.log(isTriangle(5, 5, 5)); // true (tam giác đều)
console.log(isTriangle(1, 2, 3)); // false (không hợp lệ)
