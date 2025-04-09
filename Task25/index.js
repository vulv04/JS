// Input:
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

function removeDuplicate(arr) {
    return Array.from(new Set(arr));
}

// Output:
const result = removeDuplicate(fruits);

console.log(result); // ["apple", "banana", "kiwi", "orange"]