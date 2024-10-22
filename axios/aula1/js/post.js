const form = document.querySelector("#post_form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Chame a função corretamente

  axios.post("https://jsonplaceholder.typicode.com/posts", {
    title: titleInput.value, // Mova title para fora de body
    body: bodyInput.value,
    userId: 1,
  })
});
