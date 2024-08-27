class Animal {
  constructor(pata) {
    this.pata = pata;
  }
}

class Cachorro extends Animal {
  constructor(pata, corPelo) {
    super(pata);
    this.corPelo = corPelo;
  }
}

const maya = new Cachorro(4, "loiro");
console.log(maya);

console.log(maya instanceof Animal) 

console.log(Cachorro instanceof Animal)

console.log(new Cachorro (4, 'preto') instanceof Animal)