// USANDO A FUNCTION DE FORA
// function imprimir(elemento) {
//   console.log(elemento);
// }

// CRIANDO A FUNCTION DENTRO
// numeros.forEach((elemento) => {
//   console.log(elemento);
// });

const frutas = [
  "Maçã 🍎",
  "Banana 🍌",
  "Laranja 🍊",
  "Morango 🍓",
  "Pêssego 🍑",
  "Abacaxi 🍍",
  "Uva 🍇",
];

// 3 PARAMETROS

frutas.forEach((elementos, index, array) => {
  console.log(elementos, index, array);
});

// FIND: precisa de uma condiçao (comparaçao) para enconstrar

const numeros = [1, 2, 3, 4, 5, 6];

const encontrado = numeros.find((item) => {
  return item === 5;
});

console.log(encontrado);

// ARRAY DE OBJETOS

const pessoas = [
  {
    nome: "pedro",
    idade: 21,
  },
  {
    nome: "maya",
    idade: 1,
  },
  {
    nome: "mara",
    idade: 60,
  },
  {
    nome: "marcio",
    idade: 58,
  },
];

const buscar = pessoas.find((objeto) => {
  return objeto.idade > 15;
});

console.log(buscar);

