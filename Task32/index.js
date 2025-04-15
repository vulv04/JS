// Input
const arrayString = ["JavaScript", "java", "Python", "Ruby"];
let keyWord = "ja";

function filterByKeyword(arrayString, keyWord) {
    const result = arrayString.filter((str) => str.toLowerCase().includes(keyWord.toLowerCase()));
    return result;
}
// Test

console.log(filterByKeyword(arrayString, keyWord)); //["JavaScript", "java"]