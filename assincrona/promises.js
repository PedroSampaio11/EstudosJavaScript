//PROMISES ou PROMESSAS
const fs = require("fs");

console.log("antes");

// criando uma promessa, dificilmente vaou criar do 0

function lerArquivo() {
  return new Promise((resolve, reject) => {
    fs.readFile("./assincrona/arquivo.txt", (erro, conteudo) => {
      if (erro) {
        reject("ERROR", erro);
      } else {
        resolve(String(conteudo));
      }
    });
  });
}

// foco a partir daqui
lerArquivo()
  .then((retornoResolve) => {
    console.log("deu certo:", retornoResolve);
  })
  .catch((erro) => {
    console.log("deu ruim:", erro);
  })
  .finally(() => {
    console.log("finalizando com erro ou sucesso");
  });


