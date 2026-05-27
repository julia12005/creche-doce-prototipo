const alunos =
    JSON.parse(localStorage.getItem("alunos")) || [];

const relatorios =
    JSON.parse(localStorage.getItem("relatorios")) || [];

const selectAluno =
    document.getElementById("aluno");

const listaRelatorios =
    document.getElementById("listaRelatorios");

const form =
    document.getElementById("relatorioForm");

// Carrega alunos
function carregarAlunos() {

    alunos.forEach(aluno => {

        const option =
            document.createElement("option");

        option.value = aluno.nomeAluno;

        option.textContent = aluno.nomeAluno;

        selectAluno.appendChild(option);

    });

}

carregarAlunos();

// Carrega relatórios
function carregarRelatorios() {

    listaRelatorios.innerHTML = "";

    if (relatorios.length === 0) {

        listaRelatorios.innerHTML =
            "<li>Nenhum relatório gerado.</li>";

        return;

    }

    relatorios
        .slice()
        .reverse()
        .forEach(relatorio => {

            const li =
                document.createElement("li");

            li.innerHTML = `
                <strong>${relatorio.aluno}</strong>
                <br>
                Relatório gerado em:
                ${relatorio.data}
            `;

            listaRelatorios.appendChild(li);

        });

}

carregarRelatorios();

// Gera relatório
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const aluno =
        document.getElementById("aluno").value;

    const cognitivo =
        document.getElementById("cognitivo").value.trim();

    const motor =
        document.getElementById("motor").value.trim();

    const emocional =
        document.getElementById("emocional").value.trim();

    const social =
        document.getElementById("social").value.trim();

    const observacoes =
        document.getElementById("observacoes").value.trim();

    // Validação
    if (
        aluno === "" ||
        cognitivo === "" ||
        motor === "" ||
        emocional === "" ||
        social === ""
    ) {

        alert("Preencha todos os campos obrigatórios.");

        return;

    }

    // Usuário logado
    const usuario =
        JSON.parse(localStorage.getItem("usuarioLogado"));

    // Cria objeto relatório
    const novoRelatorio = {

        aluno,
        cognitivo,
        motor,
        emocional,
        social,
        observacoes,

        professora:
            usuario ? usuario.email : "Não identificado",

        data:
            new Date().toLocaleString("pt-BR")

    };

    // Salva
    relatorios.push(novoRelatorio);

    localStorage.setItem(
        "relatorios",
        JSON.stringify(relatorios)
    );

    alert("Relatório gerado com sucesso!");

    // Atualiza lista
    carregarRelatorios();

    // Limpa formulário
    form.reset();

});