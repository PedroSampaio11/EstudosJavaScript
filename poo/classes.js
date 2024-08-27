// classe es6

// crio uma classe
class Pessoa {
  // inicio as propriedades
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pedro = new Pessoa("pedro", 22);
console.log(pedro);



// mais sobre classes

class Carro {
  constructor(cor, modelo) {
    this.cor = cor;   //this.cor é como se fosse a chave e a cor o valor
    this.modelo = modelo;
  }

  descreverCarro() {
    return `Este carro é ${this.cor} e é um ${this.modelo}.`;
  }
}

const peugeot = new Carro ('prata', 'peugeot')

console.log(peugeot.descreverCarro());