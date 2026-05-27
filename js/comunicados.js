const comunicados =
    JSON.parse(localStorage.getItem("comunicados")) || [];

const listaComunicados =
    document.getElementById("listaComunicados");

const form =
    document.getElementById("comunicadoForm");

// Carrega comunicados
function carregarComunicados() {

    listaComunicados.innerHTML = "";

    if (comunicados.length === 0) {

        listaComunicados.innerHTML =
            "<li>Nenhum comunicado enviado.</li>";

        return;

    }

    comunicados
        .slice()
        .reverse()
        .forEach(comunicado => {

            const li =
                document.createElement("li");

            li.innerHTML = `
                <strong>${comunicado.assunto}</strong>
                <br>
                ${comunicado.destinatario}
                <br>
                <small>
                    ${comunicado.data}
                </small>
            `;

            listaComunicados.appendChild(li);

        });

}

carregarComunicados();

// Envia comunicado
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const destinatario =
        document.getElementById("destinatario").value;

    const assunto =
        document.getElementById("assunto").value.trim();

    const mensagem =
        document.getElementById("mensagem").value.trim();

    // Validação
    if (
        destinatario === "" ||
        assunto === "" ||
        mensagem === ""
    ) {

        alert("Preencha todos os campos.");

        return;

    }

    // Usuário logado
    const usuario =
        JSON.parse(localStorage.getItem("usuarioLogado"));

    // Cria comunicado
    const novoComunicado = {

        destinatario,
        assunto,
        mensagem,

        enviadoPor:
            usuario ? usuario.email : "Não identificado",

        data:
            new Date().toLocaleString("pt-BR")

    };

    // Salva comunicado
    comunicados.push(novoComunicado);

    localStorage.setItem(
        "comunicados",
        JSON.stringify(comunicados)
    );

    alert("Comunicado enviado com sucesso!");

    // Atualiza lista
    carregarComunicados();

    // Limpa formulário
    form.reset();

});