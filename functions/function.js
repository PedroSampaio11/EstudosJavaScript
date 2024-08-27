function saudacao(nome, curso, prof = "dev back") {
  return `ola ${nome} do curso de ${curso} e que trabalha como ${prof}`;
}

const mensagem = saudacao("pedro", "ads", "dev front end"); // chamada da funçao

console.log(mensagem); // impressao

// FUNÇOES ANONIMAS

const soma = function (num) {
  return num * 2;
};

const dobro = soma(2);
console.log(dobro);


// ARROW FUNCTION

const somar = (num1,num2) => {
    return num1 + num2
}

const mais = somar(2, 3)
console.log(mais)