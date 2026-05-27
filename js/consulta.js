const alunos =
    JSON.parse(localStorage.getItem("alunos")) || [];

const listaAlunos =
    document.getElementById("listaAlunos");

const resultadoAluno =
    document.getElementById("resultadoAluno");

const campoBusca =
    document.getElementById("buscaAluno");

const botaoPesquisar =
    document.getElementById("btnPesquisar");

// Lista alunos cadastrados
function carregarAlunos() {

    listaAlunos.innerHTML = "";

    if (alunos.length === 0) {

        listaAlunos.innerHTML =
            "<li>Nenhum aluno cadastrado.</li>";

        return;

    }

    alunos.forEach(aluno => {

        const li = document.createElement("li");

        li.textContent =
            `${aluno.nomeAluno} - ${aluno.turma}`;

        listaAlunos.appendChild(li);

    });

}

carregarAlunos();

// Pesquisa aluno
botaoPesquisar.addEventListener("click", () => {

    const busca =
        campoBusca.value.toLowerCase().trim();

    if (busca === "") {

        alert("Digite o nome do aluno.");

        return;

    }

    const alunoEncontrado = alunos.find(aluno =>

        aluno.nomeAluno.toLowerCase().includes(busca)

    );

    if (!alunoEncontrado) {

        resultadoAluno.innerHTML = `
            <p>Aluno não encontrado.</p>
        `;

        return;

    }

    resultadoAluno.innerHTML = `

        <p><strong>Nome:</strong> ${alunoEncontrado.nomeAluno}</p>

        <p><strong>Data de Nascimento:</strong>
        ${alunoEncontrado.dataNascimento}</p>

        <p><strong>Turma:</strong>
        ${alunoEncontrado.turma}</p>

        <p><strong>Responsável:</strong>
        ${alunoEncontrado.responsavel}</p>

        <p><strong>CPF:</strong>
        ${alunoEncontrado.cpf}</p>

        <p><strong>Contato:</strong>
        ${alunoEncontrado.contato}</p>

        <p><strong>Documento:</strong>
        ${alunoEncontrado.documento}</p>

        <p><strong>Data do Cadastro:</strong>
        ${alunoEncontrado.dataCadastro}</p>

    `;

});