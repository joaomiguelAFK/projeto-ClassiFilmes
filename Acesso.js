<script>
  function showMessage(msg) {
    alert(msg);
  }

  document.querySelector(".icon-top a").addEventListener("click", function (e) {
    e.preventDefault();
    showMessage("Você está usando o ClassiFilmes sem conta.");

    window.location.href = "pagina-sem-conta.html";
  });

  document.querySelectorAll(".option a")[1].addEventListener("click", function (e) {
    e.preventDefault();
    showMessage("Redirecionando para login...");
    window.location.href = "login.html";
  });

  document.querySelectorAll(".option a")[2].addEventListener("click", function (e) {
    e.preventDefault();
    showMessage("Baixe o app na loja oficial.");

 window.open("https://link-para-loja-do-app", "_blank");
  });

  document.querySelectorAll(".option a")[3].addEventListener("click", function (e) {
    e.preventDefault();
    const idioma = prompt("Escolha o idioma: pt-BR, en-US, es-ES");
    if (idioma) {
      showMessage("Idioma selecionado: " + idioma);

 idioma
    }
  });

  document.querySelector(".button a").addEventListener("click", function (e) {
    e.preventDefault();
    showMessage("ClassiFilmes é um site com recomendações baseadas em críticas e preferências.");
    window.location.href = "sobre.html";
  });
</script>