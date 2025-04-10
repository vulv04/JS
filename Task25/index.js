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
    return arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}

// Output:
const result = removeDuplicate(fruits);

console.log(result); // ["apple", "banana", "kiwi", "orange"]