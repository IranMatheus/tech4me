function letraMinuscula(nome) {
  if (nome && nome.length > 0) {
    const primeiraLetra = nome.charAt(0).toLowerCase();
    console.log(primeiraLetra);
  } else {
    console.log("O nome do candidato está vazio ou inválido.");
  }
}

letraMinuscula("João"); 
letraMinuscula("Maria");
letraMinuscula("");


// Saída: j
// Saída: m
// Saída: O nome do candidato está vazio ou inválido.