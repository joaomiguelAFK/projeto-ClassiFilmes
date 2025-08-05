addEventListener("DOMContentLoaded", () => {
  const consentimentoDiv = document.getElementById("consentimento");
  const checkbox = document.getElementById("aceito-politica");
  const botao = document.getElementById("confirmar-consentimento");

  if (localStorage.getItem("politicaAceita") === "sim") {
    consentimentoDiv.style.display = "none";
    console.log("Usuário já aceitou a Política de Privacidade.");
  } else {
    alert("Atualizamos nossa Política de Privacidade em 17 de julho de 2025.");
  }

  botao.addEventListener("click", () => {
    if (checkbox.checked) {
      localStorage.setItem("politicaAceita", "sim");
      alert("Obrigado por aceitar nossa Política de Privacidade!");
      consentimentoDiv.style.display = "none";
    } else {
      alert("Você precisa marcar a opção para continuar.");
    }
  });
});