/** @format */

class Produtos {
  constructor(marca, preço) {
    this.marca = marca;
    this.preço = preço;
  }

  descontoProduto(desconto) {
    return this.preço * ((100 - desconto) / 100);
  }
}

const shirt = new Produtos("camiseta preta", 20);

console.log(shirt);

// com desconto

console.log(shirt.descontoProduto(10));
