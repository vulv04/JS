// Input

const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"]; // 8

function countTotalWords(arr) {
    return arr.reduce((acc, str) => {
        const words = str.split(" ");
        return acc + words.length;
    }, 0);
}
// Test
console.log(countTotalWords(["Hello world", "JS is fun", "Arrays and strings"]))