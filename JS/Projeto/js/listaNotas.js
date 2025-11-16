// Dados dos alunos e suas notas
const notasAlunos = [
  { nome: "Rana", nota: 8.5 },
  { nome: "Samantha", nota: 6.0 },
  { nome: "Axl", nota: 9.0 },
  { nome: "Lorena", nota: 7.5 },
  { nome: "Stella", nota: 5.0 },
];

// Função para calcular a média das notas
function calcularMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i].nota;
  }
  return soma / notas.length;
}

// Função para encontrar o aluno com a maior nota
function encontrarMaiorNota(notas) {
  let maiorNota = notas[0];
  for (let i = 1; i < notas.length; i++) {
    if (notas[i].nota > maiorNota.nota) {
      maiorNota = notas[i];
    }
  }
  return maiorNota;
}

// Função para encontrar alunos abaixo da média
function alunosAbaixoDaMedia(notas, media) {
  let abaixoDaMedia = [];
  for (let i = 0; i < notas.length; i++) {
    if (notas[i].nota < media) {
      abaixoDaMedia.push(notas[i]);
    }
  }
  return abaixoDaMedia;
}

// Função para gerar o relatório
function gerarRelatorio() {
  const media = calcularMedia(notasAlunos);
  const maiorNotaAluno = encontrarMaiorNota(notasAlunos);
  const alunosAbaixo = alunosAbaixoDaMedia(notasAlunos, 7.0);

  let relatorio = "Relatório de Notas:\n";
  for (let i = 0; i < notasAlunos.length; i++) {
    relatorio += `${notasAlunos[i].nome}: ${notasAlunos[i].nota}\n`;
  }
  relatorio += `\nMédia da turma: ${media.toFixed(2)}\n`;
  relatorio += `Aluno com a maior nota: ${maiorNotaAluno.nome} (${maiorNotaAluno.nota})\n`;
  relatorio += `Alunos abaixo da média (7.0):\n`;
  if (alunosAbaixo.length > 0) {
    for (let i = 0; i < alunosAbaixo.length; i++) {
      relatorio += `${alunosAbaixo[i].nome} (${alunosAbaixo[i].nota})\n`;
    }
  } else {
    relatorio += "Nenhum aluno abaixo da média.\n";
  }

  alert(relatorio); // Exibe o relatório em um alerta
}
