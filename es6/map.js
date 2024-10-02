/** @format */

const products = [
  { id: 1, name: "Product 1", price: 10.99, category: "roupa" },
  { id: 2, name: "Product 2", price: 9.99, category: "roupa" },
  { id: 3, name: "Product 3", price: 12.99 },
  { id: 4, name: "Product 4", price: 7.99, category: "roupa" },
  { id: 5, name: "Product 5", price: 8.99 },
];

const productsMap = products.map((p) => {
  if (p.category === "roupa") {
    p.onsale = true;
  }
});

console.log(products)