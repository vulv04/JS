let a =parseFloat(prompt("Nhập số a: "));
let b =parseFloat(prompt("Nhập số b: "));
function swapNumber(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, b);
}

swapNumber(a,b);
