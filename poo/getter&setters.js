class Jogador {
  constructor(nome) {
    this.nome = nome;
    this._num = ""; //propriedade privada
  }

  get apresentarNome() {
    return `meu nome é ${this.nome}`;
  }

  // Setter para definir o número da camisa
  set numeroCamisa(numero) {
    this._num = numero;
  }


  // Getter para obter o número da camisa
  get numeroCamisa() {
    return this._num;
  }
}

const neymar = new Jogador("neymar jr");
console.log(neymar.apresentarNome); // Deve mostrar: "meu nome é neymar jr"

// Define o número da camisa
neymar.numeroCamisa = "10";

// Mostra o número da camisa
console.log(neymar.numeroCamisa); // Deve mostrar: "10"
