// EVERY

const numeros = [1, 2, 3, 4, 5, 6];

const positivos = numeros.every((elemento) => {
  return elemento > 0;
});

console.log(positivos);

const pessoas = [
  {
    nome: "pedro",
    idade: 21,
  },
  {
    nome: "maya",
    idade: 19,
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

const busca = pessoas.every((pessoa) => {
  return pessoa.idade > 17 && typeof pessoa.nome === "string";
});

console.log(busca);

// SOME

const lista = [-4, 30, 40, 50];

const some = lista.some((items) => {
  return items > 0;
});

console.log(some);
