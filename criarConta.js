addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const senha = document.querySelector("input[name="senha"]");
  const confirmarSenha = document.querySelector("input[name="confirmar_senha"]");

  form.addEventListener("submit", function (event) {
    
    if (senha.value !== confirmarSenha.value) {
      event.preventDefault(); 
("As senhas não coincidem. Verifique e tente novamente.");
      confirmarSenha.focus();
    } else {
      alert("Conta criada com sucesso! ");
    }
  });
});