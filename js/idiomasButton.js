

// Obtém os botões de idioma
var btnEn = document.getElementById("btn-en");
var btnEs = document.getElementById("btn-es");

// Obtém o elemento que contém o texto do site
var siteContent = document.getElementById("site-content");

// Adiciona o evento de clique nos botões de idioma
btnEn.addEventListener("click", function() {
  // Carrega o conteúdo do arquivo en.html e adiciona no site
  fetch("en.html")
    .then(response => response.text())
    .then(data => siteContent.innerHTML = data);
});

btnEs.addEventListener("click", function() {
  // Carrega o conteúdo do arquivo es.html e adiciona no site
  fetch("es.html")
    .then(response => response.text())
    .then(data => siteContent.innerHTML = data);
});
