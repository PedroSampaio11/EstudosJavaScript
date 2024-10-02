/** @format */
// normal
const soma = function (a, b) {
  return a + b;
};
console.log(soma(2, 5));

//  arrow function
const arrowSoma = (a, b) => a + b;

console.log(arrowSoma(2, 5));

const nomeUser = (nome) => {
  if (nome) {
    return `hello ${nome}`;
  } else {
    return "hello world";
  }
};

console.log(nomeUser("pedro"));
console.log(nomeUser());

const user = {
  nome: "pedro",
  sayHello() {
    setTimeout(function () {
      console.log(`username: ${this.nome}`);
    }, 1000);
  },

  sayHelloArrow() {
    setTimeout(() => {
      console.log(`username : ${this.nome}`);
    }, 2000);
  },
};

user.sayHello();
user.sayHelloArrow();
