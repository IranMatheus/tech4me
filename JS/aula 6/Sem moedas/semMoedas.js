function calcularValorAPagar(valorProduto) {
  const valor = parseFloat(valorProduto);


  if (isNaN(valor)) {
    return "Valor inválido. Por favor, insira um valor numérico.";
  }

  const valorAPagar = Math.floor(valor);

  return valorAPagar;
}

const valorDoProduto = "13.83";
const valorFinal = calcularValorAPagar(valorDoProduto);

console.log(`Valor do produto: R$ ${valorDoProduto}`);
console.log(`Você pode pagar: R$ ${valorFinal}`);

