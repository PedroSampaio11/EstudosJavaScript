/** @format */

// exemplo 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const arrFilter = arr.filter((f) => {
  if (f >= 3) {
    return f;
  }
});

console.log(arrFilter);

// exemplo 2
const users = [
  { nome: "pedro", available: true },
  { nome: "marcos", available: true },
  { nome: "joao", available: true },
  { nome: "lucas", available: false },
  { nome: "pietro", available: true },
  { nome: "carlos", available: false },
];

const userFilter = users.filter((u) => {
  if (u.available) {
    return u;
  }
});

console.log(userFilter);
