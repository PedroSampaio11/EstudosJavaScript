function checkNumber(n) {
  const result = Number(n);
  if (Number.isNaN(result)) {
    console.log("incorreto");
    return;
  }

  console.log("correto");
  return result;
}

checkNumber(5);
checkNumber("ppp")
// exemplo
