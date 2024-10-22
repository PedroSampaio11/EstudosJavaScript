/** @format */

const pegarData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
pegarData();

const container = document.querySelector("#container");

const imprimirData = async () => {
  const usersData = await pegarData();

  if (usersData) {
    usersData.forEach((user) => {
      const nome = user.name;
      const celular = user.phone;

      const div = document.createElement("div")
      container.appendChild(div)

      const h2 = document.createElement("h2")
      h2.textContent = nome

      const p = document.createElement("p")
        p.textContent = celular
      
      div.appendChild(h2)
      div.appendChild(p)
    });
  }
};
imprimirData();

