/** @format */

const btn = document.querySelector("#accept_btn");
const msg = document.createElement("div");
const principalDiv = document.querySelector(".terms-box");

msg.textContent = "Obrigado pro aceitar!!";
msg.style.display = "none";
document.body.appendChild(msg);

const btnClick = btn.addEventListener("click", (e) => {
  e.preventDefault;

  if (true) {
    principalDiv.style.display = "none";
    msg.style.display = "block";
    setTimeout(() => {
      window.location.href = "https://vizionmarketing.com.br/";
    }, 500);
  }
});
