
//Viết hàm nhận vào một mảng và làm sạch các falsy values có trong mảng
function cleanFalsyValues(arr) {
    return arr.filter(Boolean);
}
// Test
console.log("bai1")
console.log(cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]));
// Output: [1, "hello", 2, 3]

//Viết hàm lọc lấy các số chẵn của một mảng
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Test
console.log("bai2")
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(filterEvenNumbers([1, 3, 5, 7])); // Output: []
console.log(filterEvenNumbers([])); // Output: []
console.log(filterEvenNumbers([-2, -1, 0, 1, 2])); // Output: [-2, 0, 2]

// Viết hàm lọc lấy các chuỗi có độ dài lớn hơn 5 của mảng các chuỗi
function filterLongStrings(arr) {
    return arr.filter(str => str.length > 5);
}

// Test
console.log("bai3")
console.log(filterLongStrings(["hello", "world", "javascript", "nodejs"])); // Output: ["javascript", "nodejs"]
console.log(filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"])); //Output: ["hello world", "goodbye!!"]
console.log(filterLongStrings(["hi", "bye", "yes"])); //Output: []


//Cho trước mảng chứa các số nguyên, viết hàm tìm:
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function findMinMaxAverage(arr) {
    if (arr.length === 0) return null;

    let max = arr[0], maxIndex = 0;
    let min = arr[0], minIndex = 0;
    let primeSum = 0, primeCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
        if (isPrime(arr[i])) {
            primeSum += arr[i];
            primeCount++;
        }
    }

    let primeAverage = primeCount > 0 ? primeSum / primeCount : null;

    return { max, maxIndex, min, minIndex, primeAverage };
}
// Test cases
console.log("bai4")
console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6])); // {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.25 }
console.log(findMinMaxAverage([5, 5, 2, 2, 1])); // {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
console.log(findMinMaxAverage([-3, 7, -8, 11, 0])); // {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }


//  Viết hàm chèn số vào mảng mà không thay đổi thứ tự tăng dần của mảng.
function insertNumber(arr, num) {
    if (typeof num !== "number" || isNaN(num)) return arr
        .filter(item => typeof item === "number" && !isNaN(item))
        .sort((a, b) => a - b);

    //  Lọc và sắp xếp mảng
    let sortedArr = arr
        .filter(item => typeof item === "number" && !isNaN(item))
        .sort((a, b) => a - b);

    // Chèn số vào vị trí phù hợp
    let index = sortedArr.findIndex(item => item >= num);
    if (index === -1) {
        sortedArr.push(num);
    } else {
        sortedArr.splice(index, 0, num);
    }

    return sortedArr;
}
// Test cases
console.log("bai4")
console.log(insertNumber([1, 3, 5, 7, 9], 6)); // [1, 3, 5, 6, 7, 9]
console.log(insertNumber([3, "hello", 1, NaN, 4, null], 2)); // [1, 2, 3, 4]
console.log(insertNumber([], 5)); // [5]
console.log(insertNumber([-1, 10, -5, "abc"], -3)); // [-5, -3, -1, 10]
console.log(insertNumber([5, 2, 8], NaN)); // [2, 5, 8]
