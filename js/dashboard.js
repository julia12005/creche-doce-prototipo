const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuario) {

    window.location.href = "index.html";

}

// Exibe usuário logado
document.getElementById("usuarioNome").textContent =
    `Usuário: ${usuario.email}`;

document.getElementById("usuarioPerfil").textContent =
    `Perfil: ${usuario.perfil}`;

// Logout
document.getElementById("logoutBtn").addEventListener("click", (event) => {

    event.preventDefault();

    localStorage.removeItem("usuarioLogado");

    window.location.href = "index.html";

});

// Busca alunos
const alunos =
    JSON.parse(localStorage.getItem("alunos")) || [];

// Atualiza dashboard
document.getElementById("totalAlunos").textContent =
    alunos.length;

// Busca comunicados
const comunicados =
    JSON.parse(localStorage.getItem("comunicados")) || [];

// Atualiza avisos
document.getElementById("totalAvisos").textContent =
    comunicados.length;

// Lista avisos recentes
const listaAvisos =
    document.getElementById("listaAvisos");

listaAvisos.innerHTML = "";

if (comunicados.length === 0) {

    listaAvisos.innerHTML =
        "<li>Nenhum comunicado cadastrado.</li>";

} else {

    comunicados
        .slice(-3)
        .reverse()
        .forEach(comunicado => {

            const li = document.createElement("li");

            li.textContent = comunicado.mensagem;

            listaAvisos.appendChild(li);

        });

}

// Controle de acesso básico
if (usuario.perfil === "professora") {

    const linkCadastro =
        document.querySelector('a[href="cadastro.html"]');

    if (linkCadastro) {

        linkCadastro.style.display = "none";

    }

}