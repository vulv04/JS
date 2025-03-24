function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(3, 4, 5));
console.log(isTriangle(3, 4, 7));
console.log(isTriangle(5, 5, 5));
console.log(isTriangle(1, 2, 3));
