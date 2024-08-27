// forma antiga

const person = {
  color: "white",
};

const redPeople = Object.create(person )

redPeople.color = 'red'

console.log(redPeople)