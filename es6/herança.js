/** @format */

class Product {
  constructor(namee, price) {
    this.namee = namee;
    this.price = price;
  }
}

class Camisetas extends Product {
  constructor(namee, price, colors) {
    super(namee, price);
    this.colors = colors;
  }

  showColors() {
    console.log("as cores são:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const camiseta = new Camisetas("lacoste", 200, ["__","black", "white", "gold","__"])
console.log(camiseta)

camiseta.showColors()