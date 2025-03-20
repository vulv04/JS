function printSquareNumber(n) {
    let result = [];
    for (let i = 2; i * i <= n; i++) {
        result.push(i * i);
    }
    console.log(result.join(' '));
}

// Test cases
printSquareNumber(10); // 4 9
printSquareNumber(20); // 4 9 16
