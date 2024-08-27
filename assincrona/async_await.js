// async e await
const fs = require("fs");

function ler() {
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

// funçao assincrona
async function lerDados() {
  console.log("antes");

  try {
    const dadosDoArquivo = await ler(); // espere apromise ser resolvida

    console.log(dadosDoArquivo);

  } catch(erro){
    console.log(erro);
  }
} //so funciona dentro do escopo dessa funçao

lerDados();
