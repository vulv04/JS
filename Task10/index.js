function sortNumber(a, b, c) {
    // Hoán đổi để đảm bảo a < b
    if (a > b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }
     // Hoán đổi để đảm bảo a < c
    if (a > c) {
        a = a + c;
        c = a - c;
        a = a - c;
    }

    // Hoán đổi để đảm bảo b < c
    if (b > c) {
        b = b + c;
        c = b - c;
        b = b - c;
    }
        console.log(a, b, c);
}

// Output
sortNumber(3, 2, 1);