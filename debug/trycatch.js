let x = 5;
let y = 10;

try {
  const soma = x + y;
  console.log(soma)
} catch (err) {
  console.log(`erro no programa : ${err}`);
} finally {
  console.log("o codigo foi executado");
}
