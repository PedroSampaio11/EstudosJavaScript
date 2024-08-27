const fs = require("fs");

//  1- CALLBACK
// enquanto ele carrega o arquivo ele executa os outros codigos 

console.log("ANTES de ler");

// funçao assincrona porque ler um arquivo leva um tempo
fs.readFile("./assincrona/arquivo.txt", (erro, conteudo) => {
  if (erro) {
    console.log("ERROR", erro);
  } else {
    console.log(String(conteudo));
  }
});

console.log("DEPOIS de ler");

// exemplo 2

console.log('antes')

setTimeout(() => {
    console.log('foii')
}, 2000);

console.log('depois')