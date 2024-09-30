/** @format */

// var, let e const

// var
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}
console.log(x);

// let
let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  a = 15;
  console.log(a);
}
console.log(a);

// const
function logName() {
  const nome = "pedro";
  console.log(nome);
}
const nome = "thais";

console.log(nome);
logName();
