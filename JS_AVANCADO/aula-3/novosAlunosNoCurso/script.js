document.getElementById("btnCadastrar").addEventListener("click", adicionarAluno);

function adicionarAluno() {
    const campo = document.getElementById("nomeAluno");
    let nome = campo.value.trim();

    if (nome === "") {
        alert("Digite um nome!");
        return;
    }

    // Converte para MAIÚSCULAS
    nome = nome.toUpperCase();

    // Cria item e adiciona à lista
    const li = document.createElement("li");
    li.textContent = nome;
    document.getElementById("lista-alunos").appendChild(li);

    // Limpa e volta o foco
    campo.value = "";
    campo.focus();
}
