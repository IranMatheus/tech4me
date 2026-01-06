// Função para calcular o desconto em minutos pares
function calcularDescontoPar(valor) {
  const desconto = valor * 0.10; // Exemplo: 10% de desconto
  return desconto;
}

// Função para calcular o desconto em minutos ímpares
function calcularDescontoImpar(valor) {
  const desconto = valor * 0.15; // Exemplo: 15% de desconto
  return desconto;
}

// Função principal que decide qual desconto aplicar
function aplicarDesconto(valor) {
  const minutoAtual = new Date().getMinutes(); // Obtém o minuto atual

  if (minutoAtual % 2 === 0) {
    // Se o minuto for par
    const desconto = calcularDescontoPar(valor);
    return `Desconto de ${desconto.toFixed(2)} aplicado (minuto par).`;
  } else {
    // Se o minuto for ímpar
    const desconto = calcularDescontoImpar(valor);
    return `Desconto de ${desconto.toFixed(2)} aplicado (minuto ímpar).`;
  }
}

// Exemplo de uso
const valorDaCompra = 100; // Valor da compra
const resultado = aplicarDesconto(valorDaCompra);
console.log(resultado);
