// input
// Gợi ý dùng forEach hoặc reduce
const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
    return array.reduce((acc, str) => {
        const [key, value] = str.split(":");
        acc[key] = value;
        return acc;
    }, {});
}
//Test

console.log(convertArrayToObject(arrayString)); // { name: 'John', age: '30', city: 'NY' }