const alunos =
    JSON.parse(localStorage.getItem("alunos")) || [];

const rotinas =
    JSON.parse(localStorage.getItem("rotinas")) || [];

const selectAluno =
    document.getElementById("aluno");

const listaRotina =
    document.getElementById("listaRotina");

const form =
    document.getElementById("rotinaForm");

// Carrega alunos no select
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

// Exibe registros
function carregarRotinas() {

    listaRotina.innerHTML = "";

    if (rotinas.length === 0) {

        listaRotina.innerHTML =
            "<li>Nenhum registro realizado.</li>";

        return;

    }

    rotinas
        .slice()
        .reverse()
        .forEach(rotina => {

            const li =
                document.createElement("li");

            li.innerHTML = `
                <strong>${rotina.aluno}</strong>
                - ${rotina.tipo}
                <br>
                ${rotina.descricao}
                <br>
                <small>
                    ${rotina.data}
                </small>
            `;

            listaRotina.appendChild(li);

        });

}

carregarRotinas();

// Cadastro da rotina
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const aluno =
        document.getElementById("aluno").value;

    const tipo =
        document.getElementById("tipoRegistro").value;

    const descricao =
        document.getElementById("descricao").value.trim();

    const observacoes =
        document.getElementById("observacoes").value.trim();

    // Validação
    if (
        aluno === "" ||
        tipo === "" ||
        descricao === ""
    ) {

        alert("Preencha os campos obrigatórios.");

        return;

    }

    // Cria objeto
    const novaRotina = {

        aluno,
        tipo,
        descricao,
        observacoes,

        data:
            new Date().toLocaleString("pt-BR")

    };

    // Salva
    rotinas.push(novaRotina);

    localStorage.setItem(
        "rotinas",
        JSON.stringify(rotinas)
    );

    alert("Rotina registrada com sucesso!");

    // Atualiza lista
    carregarRotinas();

    // Limpa formulário
    form.reset();

});