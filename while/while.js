// let salario = Number(prompt("qual seu saldo?"));

// enquanto o saldo for < que 0 repita
// while (salario < 0) {
//   salario = Number(prompt("qual seu saldo?"));
// }

// alert(salario);

let notaAluno = Number(prompt("informe a nota"));

let somaNotas = 0; //variavel acumuladora

let contadorNotas = 0; //variavel acumuladora ( notas digitadas )

while (notaAluno >= 0) {
  somaNotas += notaAluno; // incrementando o acumulador
  contadorNotas = contadorNotas + 1;

  notaAluno = Number(prompt("informe a prox nota:"));
}

console.log(somaNotas);
console.log(contadorNotas);

console.log( 'a media das notas é:', somaNotas / contadorNotas)