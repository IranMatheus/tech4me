const alunos = [
  {
    nome: "Rana",
    idade: 25,
    peso: 80,
    altura: 1.75
  },
  {
    nome: "Axel",
    idade: 30,
    peso: 60,
    altura: 1.65
  },
  {
    nome: "Samantha",
    idade: 40,
    peso: 95,
    altura: 1.70
  }
];

const calcularIMC = (peso, altura) => peso / (altura * altura);

const classificarIMC = imc => {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc >= 18.5 && imc <= 24.9) return "Peso normal";
  if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
  return "Obesidade";
};

const alunosCalculados = alunos.map(aluno => {
  const imc = calcularIMC(aluno.peso, aluno.altura);

  return {
    ...aluno,
    imc: imc.toFixed(2),
    classificacao: classificarIMC(imc)
  };
});

const lista = document.getElementById("listaAlunos");

alunosCalculados.forEach(aluno => {
  const div = document.createElement("div");
  div.classList.add("aluno");

  div.innerHTML = `
    <strong>${aluno.nome}</strong><br>
    Idade: ${aluno.idade} anos<br>
    Peso: ${aluno.peso} kg<br>
    Altura: ${aluno.altura} m<br>
    IMC: ${aluno.imc}<br>
    Classificação: ${aluno.classificacao}
  `;

  lista.appendChild(div);
});
