const pessoa = {
  nome: "Pedro",
  idade: 22,
  altura: 1.78,
  profissao: "dev front end",
  hobbies: ["academia", "futebol", "programar"],
  funcao: () => {
    console.log("ola");
  },
};

// ADIÇAO
pessoa.posicao = "ala erquerda";

// delete pessoa.idade;

// SINTAXE RESUMIDA

const nome = "pedro";
const posicao = "ala";

const objeto = {
  nome,
  posicao,
};

// DELETE
delete objeto.nome

console.log(objeto);
