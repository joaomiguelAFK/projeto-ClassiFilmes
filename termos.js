addEventListener("DOMContentLoaded", () => {
  const botaoAceitar = document.getElementById("aceitar-termos");

  if (localStorage.getItem("termosAceitos") === "sim") {
    botaoAceitar.style.display = "none";
    console.log("Usuário já aceitou os termos anteriormente.");
  }

  botaoAceitar.addEventListener("click", () => {
    alert("Obrigado por aceitar os Termos de Uso!");
    localStorage.setItem("termosAceitos", "sim");
    botaoAceitar.style.display = "none";
  });

  if (!localStorage.getItem("termosAceitos")) {
    alert("Por favor, leia atentamente os Termos de Uso antes de continuar.");
  }
});