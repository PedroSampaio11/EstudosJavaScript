
let maiorNum = 0;
let numeroInfo;

for (i = 0; i <= 5; i++) {
  numeroInfo = Number(prompt("digite um numero positivo : "));

  //se o num digitado for maior que o maior num entao substitui
  if (numeroInfo > maiorNum) {
    maiorNum = numeroInfo;
  }
}

console.log("esse é o maior numero:", maiorNum);


const nome = 'pedro'

for(let i=0; i< nome.length; i++){
    console.log(nome[i])
}