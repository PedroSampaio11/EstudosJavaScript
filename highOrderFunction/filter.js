// FILTER

const numeros = [1, 2, 3, 4, 5, 6, 7];

const par = numeros.filter((numero) => {
  return numero % 2 == 0;
});

console.log(par);

const impar = numeros.filter((num) => {
  return num % 2 == 1;
});

console.log(impar);


// exemplo 2
const produtos = [
  {
    preco: 2,
    tipo: "bebida",
  },
  {
    preco: 5,
    tipo: "comida",
  },
  {
    preco: 122,
    tipo: "bebida",
  },
  {
    preco: 56,
    tipo: "comida",
  },
  {
    preco: 8,
    tipo: "bebida",
  },
  {
    preco: 1,
    tipo: "bebida",
  },
];

const retorno = produtos.filter((produto) => {
  return produto.preco <= 10 && produto.tipo == "bebida";
});

console.log(retorno);
