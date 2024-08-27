function criarPessoa(nome, idade) {
  const pessoa = Object.create({});

  pessoa.nome = nome;
  pessoa.idade = idade;

  return pessoa;
}

const pedro = criarPessoa("pedro", "22");

console.log(pedro);

// funçoes como classes

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const chowchow = new Cachorro('nick' ,'chowchow')

console.log(chowchow)


// metodos

chowchow.prototype.uivar = function()  {
    console.log('uivando')
}

chowchow.uivar()