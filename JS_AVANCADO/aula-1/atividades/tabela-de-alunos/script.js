const alunos = [
  { nome: "Rana", nota1: 8, nota2: 7 },
  { nome: "Samantha", nota1: 5, nota2: 4 },
  { nome: "Axel", nota1: 7, nota2: 7 },
  { nome: "Stella", nota1: 9, nota2: 8 }
];

const tabela = document.createElement("table");




const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

["Aluno", "humanas", "exatas", "Média"].forEach(texto => {
  const th = document.createElement("th");
  th.textContent = texto;
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
tabela.appendChild(thead);




const tbody = document.createElement("tbody");

alunos.forEach(aluno => {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  const tr = document.createElement("tr");

  if (media < 6) {
    tr.classList.add("reprovado");
  } else if (media >= 7) {
    tr.classList.add("aprovado");
  }

  [aluno.nome, aluno.nota1, aluno.nota2, media.toFixed(1)].forEach(valor => {
    const td = document.createElement("td");
    td.textContent = valor;
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
});

tabela.appendChild(tbody);
document.getElementById("tabela-container").appendChild(tabela);
