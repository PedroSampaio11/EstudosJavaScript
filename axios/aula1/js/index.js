// pegando os dados
const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

getData();

// imprimir na tela
const container = document.querySelector("#users_container");

const printData = async (params) => {
  const data = await getData();
  console.log(data);

  // percorre por todos users
  data.forEach((user) => {
    // cria a div
    const div = document.createElement("div");
    const nomes = user.name;
    const label = document.createElement("h2");

    label.textContent = `username da  ${nomes} :`;
    div.appendChild(label);
    label.style.color = "black";

    const nameUser = document.createElement("p");
    nameUser.textContent = user.username;
    nameUser.style.color = "blue";
    nameUser.style.fontSize = "18px";
    div.appendChild(nameUser);

    container.appendChild(div);
  });
};
printData();
