// metodos

// const pessoa = {
//   nome: "pedro",
//   idade: 22,
//   peso: 88,

//   saudar: function () {
//     return "ola, tudo bem?";
//   },
// };

// console.log(pessoa.nome);
// console.log(pessoa.saudar());

// aprofundando

const carro = {
  motor: "400hp",

  potencia: function () {
    return this.motor;
  },

  stage2: function (novaPotencia) {
    this.motor = novaPotencia;
  },
};

carro.stage2("500hp");
console.log(carro.potencia());

