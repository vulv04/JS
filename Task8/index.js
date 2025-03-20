function calcBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    return "Vui lòng nhập dữ liệu chiều cao hợp lệ !";
  }
  const BMI = weight / height ** 2;
  let status;
  if (BMI < 18.5) {
    status = "Thiếu cân";
  } else if (18.5 <= BMI < 23) {
    status = "Bình thường";
  } else if (23 <= BMI < 25) {
    status = "Thừa cân";
  } else {
    status = "Beo phi";
  }
  return `Chỉ số BMI của bạn là ${BMI.toFixed(2)} - ${status}`;
}

console.log(calcBMI(60, 1.7));
console.log(calcBMI(20, 1.7));
console.log(calcBMI(30, 1.7));
