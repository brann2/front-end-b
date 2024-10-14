// JAVASCRIPT LOOP

// ARRAY
let student = [
  {
    id: 1,
    firstname: "jhon",
    grade: 89,
  },
  {
    id: 2,
    firstname: "jane",
    grade: 80,
  },
  {
    id: 3,
    firstname: "nana",
    grade: 96,
  },
];
console.log(student);

// let i = 0;
// while (i < student.length) {
//   console.log(student[i].firstname);
//   i++;

//3. do - while loop
// let i = 0
// do {
//   console.log(student[i].firstname);
//   i++;
// } while (i < student.length)

// array built in method

// student.forEach(function (item){
//   console.log(item.firstname);
// })

// let output = student.map(function (item) {
//   return item.firstname;
// });
// console.log(output);

//4 filter

let outputFilter = student.filter(function (item) {
  return item.grade >= 90;
});
console.log(outputFilter);

// 4.b find

let outp
console.log(outputFind);
utFind = student.find(function (item) {
  return item.grade >= 90;
});
// 1. cari index negara indonesia
// 2.dengan menggunakan filter tampilan semua negara  yang berakhiran "sia"
// 3. tampilkan semua negara yang memiliki jumalah karakter = 7
