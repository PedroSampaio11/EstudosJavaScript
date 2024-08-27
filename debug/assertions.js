function checkArray(err) {
  if (Array.length === 0) {
    throw new Error("precisa tee eleementos");
  } else {
    console.log(`o array tem ${arr.length}`);
  }
}

checkArray([])