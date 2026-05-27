const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const nomeAluno =
        document.getElementById("nomeAluno").value.trim();

    const dataNascimento =
        document.getElementById("dataNascimento").value;

    const turma =
        document.getElementById("turma").value;

    const responsavel =
        document.getElementById("responsavel").value.trim();

    const cpf =
        document.getElementById("cpf").value.trim();

    const contato =
        document.getElementById("contato").value.trim();

    const documento =
        document.getElementById("documento").files[0];

    // Validação de campos obrigatórios
    if (
        nomeAluno === "" ||
        dataNascimento === "" ||
        turma === "" ||
        responsavel === "" ||
        cpf === "" ||
        contato === ""
    ) {

        alert("Preencha todos os campos obrigatórios.");

        return;

    }

    // Validação simples CPF
    const cpfLimpo = cpf.replace(/\D/g, "");

    if (cpfLimpo.length !== 11) {

        alert("CPF inválido.");

        return;

    }

    // Busca alunos já cadastrados
    const alunos =
        JSON.parse(localStorage.getItem("alunos")) || [];

    // Verifica duplicidade de CPF
    const cpfExistente = alunos.find(aluno =>
        aluno.cpf === cpf
    );

    if (cpfExistente) {

        alert("CPF já cadastrado.");

        return;

    }

    // Validação de documento
    if (documento) {

        const tamanhoMaximo = 10 * 1024 * 1024;

        if (documento.size > tamanhoMaximo) {

            alert("O arquivo deve ter no máximo 10MB.");

            return;

        }

    }

    // Cria objeto aluno
    const novoAluno = {

        nomeAluno,
        dataNascimento,
        turma,
        responsavel,
        cpf,
        contato,

        documento: documento ? documento.name : "Nenhum arquivo",

        dataCadastro: new Date().toLocaleDateString("pt-BR")

    };

    // Salva aluno
    alunos.push(novoAluno);

    localStorage.setItem(
        "alunos",
        JSON.stringify(alunos)
    );

    alert("Aluno cadastrado com sucesso!");

    // Limpa formulário
    form.reset();

});