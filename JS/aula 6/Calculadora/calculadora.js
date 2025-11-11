const numeroDigitado = prompt("Por favor, digite um número:");

const numero = parseFloat(numeroDigitado);

if (isNaN(numero)) {
  console.log("Por favor, insira um número válido.");
} else {
  const raizQuadrada = Math.sqrt(numero);
  console.log(`Raiz quadrada de ${numero}: ${raizQuadrada}`);

  const arredondadoParaCima = Math.ceil(numero);
  console.log(`Arredondado para cima: ${arredondadoParaCima}`);

  const arredondadoParaBaixo = Math.floor(numero);
  console.log(`Arredondado para baixo: ${arredondadoParaBaixo}`);

  if (arredondadoParaBaixo % 2 === 0) {
    console.log(`${arredondadoParaBaixo} é um número par.`);
  } else {
    console.log(`${arredondadoParaBaixo} é um número ímpar.`);
  }
}
