Array.prototype.reduce2 = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
 };

// Sample 1
const arr1 = [1, 2, 3, 4, 5];
const result1 = arr1.reduce2((accumulator, value) => {
    return accumulator + value;
}, 0);
console.log(result1); // 15

// Sample 2
const arr2 = [];
try {
    const result2 = arr2.reduce2((accumulator, value) => {
        return accumulator + value;
    });
    console.log(result2); // Error: Reduce of empty array with no initial value
}
catch (error) {
    console.error(error.message); // Error: Reduce of empty array with no initial value
}

// Sample 3
const arr3 = [];
const result3 = arr3.reduce2((accumulator, value) => {
    return accumulator + value;
}, 0);
console.log(result3); // 0
