// REDUCE

const numeros = [1, 2, 3, 4, 5, 6];

const soma = numeros.reduce((acumulador, elemento) => {
  return acumulador + elemento;
}, 0);

console.log(`o valor da soma é: ${soma}`);

const somaPar = numeros.reduce((acumulador, num) => {
  if (num % 2 === 0) {
    return acumulador + num;
  } else {
    return acumulador;
  }
}, 0);

console.log(somaPar);

const carrinho = [
  {
    preco: 2,
  },
  {
    preco: 2,
  },
  {
    preco: 2,
  },
];

const tot = carrinho.reduce((acc, item) => {
  return acc + item.preco;
}, 0);

console.log(`o valor do carrinho é: ${tot}`);
