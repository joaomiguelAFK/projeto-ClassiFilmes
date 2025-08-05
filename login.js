addEventListener("load", () => {
  console.log("Página de login carregada.");
  alert("Bem-vindo ao ClassiFilmes! Faça login para continuar.");
});

const loginButtons = document.querySelectorAll(".btn-login");

loginButtons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    const provider = button.textContent.trim();
    alert("Você clicou em: ${provider}");
  });
});