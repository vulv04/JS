function printChristmasTree(n, character) {
    // Kiểm tra điều kiện đầu vào
    if (!Number.isInteger(n) || n <= 0 || n >= 100 || character.length !== 1) {
        console.log("Đầu vào không hợp lệ.");
        return;
    }

    // In phần tán cây
    for (let i = 0; i < n; i++) {
        let spaces = " ".repeat(n - i - 1); // Khoảng trắng phía trước
        let stars = character.repeat(2 * i + 1); // Ký tự tạo tán cây
        console.log(spaces + stars);
    }

    // In phần gốc cây
    let trunk = " ".repeat(n - 1) + character;
    console.log(trunk);
}

// Test case
printChristmasTree(5, "*");
console.log("\n");
printChristmasTree(4, "o");
