// funçao que retorna outra funçao como parametro ]

function salve(nome) {
  return (profissao) => {
    console.log(`ola ${nome} vi que voce agora é ${profissao} parabens!!`);
  };
}

const welcome = salve("pedro");

welcome("dev front end no santander");

console.clear();

// funçao que recece outra funçao como parametro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const operacoes = (num1, num2, funcao) => {
  return funcao(num1, num2);
};

const retorno = operacoes(7, 7, multiplicar);
console.log(retorno);

const resultado = operacoes(2, 2, (num1, num2) => (num1 + num2) * (num1 + num2));

console.log(resultado);
