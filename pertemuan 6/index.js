// life (imediatley function)
// (function () {
//   console.log("hello world");
// })();
// // b. bagaimana jika ada parameter function
// let output =(function (FullName) {
//     return "hello " + FullName;
// }) ("brannn")
// console.log(output);

//2. call back function
function sayhello(callback) {
 let result = callback('jhon doo');
 return result
}

let output =sayhello(function (Fullname) {
  return "hello " + Fullname;
});
console.log(output);