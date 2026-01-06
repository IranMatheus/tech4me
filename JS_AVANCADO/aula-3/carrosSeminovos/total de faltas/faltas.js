const listaDeAlunos = [
  { nome: "João", presente: true },
  { nome: "Maria", presente: false },
  { nome: "Pedro", presente: true },
  { nome: "Ana", presente: false }
];

const faltas = calcularTotalDeFaltas(listaDeAlunos);
console.log(`Total de faltas: ${faltas}`); // Output: Total de faltas: 2
