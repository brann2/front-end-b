function menghitungbmi(berat, tinggi) {
  let bmi = berat / (tinggi * tinggi);
  return bmi;
}

let berat = 30;
let tinggi = 1.2;

let bmiResult = menghitungbmi(berat, tinggi);
console.log("BMI kamu adalah:" + bmiResult.toFixed(2));
