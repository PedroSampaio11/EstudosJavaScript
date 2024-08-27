// tag name
const lista = document.getElementsByTagName("li");
console.log(lista);

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

header.insertBefore(p, titulo);

// appendchild

