/** @format */

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

const a4 = [7,8,9]
const a5 = [...a3, ...a4];

console.log(a5)

// compor

const a6 = [...a5, 10, 11]
console.log(a6)