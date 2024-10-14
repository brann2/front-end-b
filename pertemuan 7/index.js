// deklarasi  array
// cara 1. array literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// CARA 2. kata kunci new
// let numbers2 = new Array(1, 2, 3, 4, 5);
// console.log(numbers2);

// tipe data yang bisa disimpen dalam array
let numbers = [1, 2, 3, 4, 5];
let student = ["jhon", "natan", "mama", "anna ", "kare"];
let jhon = ["jhon", 30, true, [80, 90, 100]];
console.log(jhon);

// array length
console.log(numbers.length);
console.log(student.length);
console.log(jhon.length);

console.log(numbers[2]);
console.log(student[1]);
console.log(jhon[2]);
console.log(jhon[3][1]);

// mengakses number/data terakhir dalam array
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers2[9]);

// array method
let array = [1, 2, 3, "hello", false, true];
console.log(array);

// toString ()
console.log(array.toString());
// join ()
console.log(array.join());
console.log(array.join(" "));

// array.pop ()
array.pop();
console.log(array);
// push ()
array.push("selamat pagi");
console.log(array);
// array.shift
array.shift();
console.log(array);
// array.unshift()
array.unshift("selamat pagi");
console.log(array);
// splice ()
array.splice(2, 1); // hapus
console.log(array);
array.splice(1, 1, 1); // ganti
console.log(array);
array.splice(2, 0, 2, 3); //tambah
console.log(array);

// concat ()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

// slice