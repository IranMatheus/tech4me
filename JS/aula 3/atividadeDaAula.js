function obterCentavos(valorEmReais) {
  const valorEmCentavos = valorEmReais * 100;

  const centavos = valorEmCentavos % 100;

  return centavos;
}

const valor = 1.50;
const centavos = obterCentavos(valor);

console.log(centavos);