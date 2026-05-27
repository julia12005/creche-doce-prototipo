const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const perfil = document.getElementById("perfil").value;

    // Validação de campos vazios
    if (email === "" || senha === "" || perfil === "") {
        alert("Preencha todos os campos.");
        return;
    }

    // Validação simples da senha
    if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres.");
        return;
    }

    // Simulação de usuários permitidos
    const usuariosPermitidos = [
        {
            email: "diretora@creche.com",
            senha: "123456",
            perfil: "diretora"
        },
        {
            email: "professora@creche.com",
            senha: "123456",
            perfil: "professora"
        },
        {
            email: "admin@creche.com",
            senha: "123456",
            perfil: "administrativo"
        }
    ];

    // Verifica login
    const usuarioEncontrado = usuariosPermitidos.find(usuario =>
        usuario.email === email &&
        usuario.senha === senha &&
        usuario.perfil === perfil
    );

    if (!usuarioEncontrado) {
        alert("E-mail, senha ou perfil inválidos.");
        return;
    }

    // Salva sessão do usuário
    localStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuarioEncontrado)
    );

    // Redireciona para dashboard
    window.location.href = "dashboard.html";

});