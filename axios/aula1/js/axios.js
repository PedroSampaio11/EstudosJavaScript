/** @format */

const pegar = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
pegar();

const imprimir = async () => {
  try {
    const resposta = await pegar();

    console.log(resposta)

    resposta.forEach(usuarios => {
      const div = document.createElement("div")
      container.appendChild(div)

      const nomes = document.createElement("h1")
      nomes.textContent = ` Nome: ${usuarios.name}`

      const emails = document.createElement("h2")
      emails.textContent = `Email: ${usuarios.email}`
      emails.style.color = "pink"

      div.appendChild(nomes)
      div.appendChild(emails)

    });
  } catch (err) {
    console.log(err);
  }
};

imprimir()