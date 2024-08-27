// MAP

const numeros = [1, 2, 3, 4, 5];

const novoArray = numeros.map((elemento) => {
  return elemento * 2;
});

console.log(novoArray);

const carrinho = [
  {
    prod: "arroz",
    preco: 40,
    qtd: 2,
  },
  {
    prod: "salgadinho",
    preco: 4,
    qtd: 1,
  },
  {
    prod: "mucilon",
    preco: 30,
    qtd: 6,
  },
];

//  spread operator para adicionar nova propriedade

// . acessa

const carrinhoTotal = carrinho.map((item) => {
  return {
    ...item,
    total: item.preco * item.qtd,
  };
});

console.log(carrinhoTotal);
