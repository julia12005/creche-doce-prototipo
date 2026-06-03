const usuario =
    JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuario) {
    window.location.href = "index.html";
}

const links =
    document.querySelectorAll(".sidebar a");

links.forEach(link => {

    const pagina =
        link.getAttribute("href");

    if (usuario.perfil === "diretora") {

        if (
            pagina !== "dashboard.html" &&
            pagina !== "consulta.html" &&
            pagina !== "index.html"
        ) {
            link.style.display = "none";
        }

    }

    if (usuario.perfil === "professora") {

        if (
            pagina !== "rotina.html" &&
            pagina !== "relatorio.html" &&
            pagina !== "comunicados.html" &&
            pagina !== "index.html"
        ) {
            link.style.display = "none";
        }

    }

    if (usuario.perfil === "administrativo") {

        if (
            pagina !== "cadastro.html" &&
            pagina !== "index.html"
        ) {
            link.style.display = "none";
        }

    }

});