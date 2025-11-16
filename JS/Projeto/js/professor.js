// com while
function chamadaComWhile() {
  let listaDeAlunos = "";
  let nome;

  while ((nome = prompt("Digite o nome do aluno :"))) {
    listaDeAlunos += nome + ", ";
  }

  if (listaDeAlunos.length > 0) {
    listaDeAlunos = listaDeAlunos.slice(0, -2);
  }

  console.log(listaDeAlunos);
}

// com do... while
function chamadaComDoWhile() {
  let listaDeAlunos = "";
  let nome;
   
  do {
    nome = prompt("Digite o nome do aluno :");
    if (nome) {
      listaDeAlunos += nome + ", ";
    }

    } while (nome);

    if (listaDeAlunos.length > 0) {
        listaDeAlunos = listaDeAlunos.slice(0, -2);
    }

    console.log(listaDeAlunos);
}