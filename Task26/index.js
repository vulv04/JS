const fruits = [
    "apple",
    "banana",
    "kiwi",
    "kiwi",
    "banana",
    "orange",
    "apple",
    "kiwi",
];

function countElement(arr) {
    const count = {};
    for (let item of arr) {
        if (count[item]) {
            count[item]++;
        } else {
            count[item] = 1;
        }
    }
    return count;
}

const result = countElement(fruits);
console.log(result); // { apple: 2, banana: 2, kiwi: 3, orange: 1 }
