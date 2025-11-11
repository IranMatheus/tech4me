function calcularPrecoGasolina(precoComTresDigitos) {
  const preco = parseFloat(precoComTresDigitos);

  if (isNaN(preco)) {
    return "Preço inválido. Por favor, insira um valor numérico.";
  }

  const precoFormatado = preco.toFixed(2);

  return precoFormatado;
}

const precoDigitado = "4.940";
const precoFinal = calcularPrecoGasolina(precoDigitado);

console.log(precoFinal);
