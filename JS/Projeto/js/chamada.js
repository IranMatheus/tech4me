function fazerChamada() {
  const alunos = [];
  let nome;

  while (true) {
    nome = prompt("Digite o nome do aluno (ou deixe em branco para finalizar):");

    if (nome === "") {
      break;
    }

    alunos.push(nome); 
  }

  console.log("Chamada finalizada. Lista de alunos:");
  for (let i = 0; i < alunos.length; i++) {
    console.log(`${i + 1}. ${alunos[i]}`); 
  }
}
