let permissoes = "professor"; // ou professor ou admin

switch (permissoes) {
  case "aluno":
    console.log("aulas");
    break;
  case "professor":
    console.log("notas");
    break;
  case "admin":
    console.log("tudo");
    break;
  default:
    break;
}
