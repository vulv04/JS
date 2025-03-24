function printSquareNumber(n) {
    let result = [];
    for (let i = 2; i * i <= n; i++) {
        result.push(i * i);
    }
    console.log(result.join(' '));
}

printSquareNumber(10);
printSquareNumber(20);
