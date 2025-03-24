let a = parseFloat(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));

function isSameSign(a, b) {
    return (a > 0 && b > 0) || (a < 0 && b < 0);
}

console.log(isSameSign(a, b));
