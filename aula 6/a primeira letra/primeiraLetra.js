function determinarDiaEntrevista(nomeCandidato) {
  const primeiraLetra = nomeCandidato.charAt(0).toUpperCase();

  const ehVogal = /[AEIOU]/.test(primeiraLetra);

  let diaEntrevista;
  if (ehVogal) {
    diaEntrevista = "Segunda-feira";
  } else {
    diaEntrevista = "Terça-feira";
  }

  return `O candidato(a) ${nomeCandidato} será entrevistado(a) na ${diaEntrevista}.`;
}

console.log(determinarDiaEntrevista("Alice"));
console.log(determinarDiaEntrevista("Bruno")); 
console.log(determinarDiaEntrevista("ana")); 
console.log(determinarDiaEntrevista("Carlos"));
