Array.prototype.filter2 = function (callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const value = this[i];
        if (callback.call(thisArg, value, i, this)) {
            result.push(value);
        }
    }
    return result;
};

// Sample usage
const arr = [1, 2, 3, 4, 5];
const result = arr.filter2((value) => {
    return value % 2 !== 0;
});

console.log(result); // [1, 3, 5]