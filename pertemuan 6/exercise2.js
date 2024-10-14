// no 1
(function () {
  function menghitungbmi(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi;
  }

  let berat = 30;
  let tinggi = 1.2;

  let bmiResult = menghitungbmi(berat, tinggi);
  console.log("BMI kamu adalah: " + bmiResult.toFixed(2));
})();

// no 2

function menghitungbmi(berat, tinggi, callback) {
  let bmi = berat / (tinggi * tinggi);
  callback(bmi);
}
function displayBMI(bmi) {
  console.log("BMI kamu adalah: " + bmi.toFixed(2));
}

let berat = 30;
let tinggi = 1.2;

menghitungbmi(berat, tinggi, displayBMI);