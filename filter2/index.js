Array.prototype.filter2 = function (callback, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.filter2 called on null or undefined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const O = Object(this);
    const len = O.length >>> 0;
    const res = [];

    for (let i = 0; i < len; i++) {
        if (i in O) {
            const val = O[i];
            if (callback.call(thisArg, val, i, O)) {
                res.push(val);
            }
        }
    }

    return res;
};

// Sample usage
const arr = [1, 2, 3, 4, 5];
const result = arr.filter2((value) => {
    return value % 2 !== 0;
});

console.log(result); // [1, 3, 5]