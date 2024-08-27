class Carro {
  constructor(cor, modelo) {
    this.cor = cor; //this.cor é como se fosse a chave e a cor o valor
    this.modelo = modelo;
  }

}

const rodas = Symbol()
Carro.prototype[rodas] = 4

const ferra = new Carro('preta', '488')
