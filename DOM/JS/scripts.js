// tag name
const listStyle = document.getElementsByTagName("li");
console.log(listStyle);

// id
const titulo = document.getElementById("title");
console.log(titulo);

// seletor
const seletor = document.querySelectorAll(".product");
console.log(seletor);

// classe

const prods = document.getElementsByClassName("product");
console.log(prods);

// insert before

const p = document.createElement("p");
console.log(p);

const header = titulo.parentElement;
console.log(header);

//                  criado         alvo
header.insertBefore(p, titulo);

// appendchild

const navlink = document.querySelector("nav ul ");

const li = document.createElement("li");

navlink.appendChild(li);
li.textContent = "novo link";

// replace child

const h2 = document.createElement("h2");
h2.textContent = "Novo Título";

header.replaceChild(h2, title);

// Atributos

// setattribute
const firstlink = navlink.querySelector("a");
console.log(firstlink);

firstlink.setAttribute("href", "https://www.google.com.br/");

firstlink.setAttribute("target", "_blank");

// getattribute

console.log(firstlink.getAttribute("href"));

// altura e largura

const footer = document.querySelector("footer");
console.log(footer.offsetHeight);
console.log(footer.offsetWidth);

console.log(footer.clientHeight);
console.log(footer.clientWidth);

// posiçao

const product1 = prods[0];

console.log(product1.getBoundingClientRect());

// estilo

const container = document.getElementById("main-container");

container.style.color = "black";
container.style.backgroundColor = "#d1d1d1";
container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.padding = "25px";
container.style.marginBottom = "15px";

// alterando todos de uma vez

for (const li of listStyle) {
  li.style.backgroundColor = "red"
}
