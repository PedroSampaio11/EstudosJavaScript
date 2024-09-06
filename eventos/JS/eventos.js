// adicionando eventos
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  console.log("Clicou no botão");
});

// remover eventos
const btn2 = document.querySelector("#other-btn");

function imprimir() {
  console.log("Clicou no outro botão");
}

btn2.addEventListener("click", imprimir);

const btn3 = document.querySelector("#btn-remove");

btn3.addEventListener("click", function () {
  console.log("evento removido");
  btn2.removeEventListener("click", imprimir);
});

// argumento do evento

const title = document.querySelector("#title");

title.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target);
});

// propagação

const btnContainer = document.querySelector("#btn-container");
const insideBtnContainer = document.querySelector("#div-btn");

btnContainer.addEventListener("click", () => {
  console.log("Clicou no container");
});

insideBtnContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Clicou no botao");
});

// removendo padrao

const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("nao alterou nada");
});

// Açoes de tecla

document.addEventListener("keyup", (event) => {
  console.log(`soltou a tecla ${event.key}`);
});

document.addEventListener("keydown", (event) => {
  console.log(`apertou a tecla ${event.key}`);
});

//  mouse

const mousEvents = document.querySelector("#mouse");

mousEvents.addEventListener("mousedown", () => {
  console.log("pressionou");
});

mousEvents.addEventListener("mouseup", (e) => {
  e.stopPropagation();
  console.log("soltou");
});

mousEvents.addEventListener("dblclick", (e) => {
  e.stopPropagation();
  console.log("2 vezes");
});


