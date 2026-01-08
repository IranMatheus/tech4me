const mesAtual = new Date().getMonth() + 1;

const itens = [
  { nome: "Leite", preco: 6.00, validade: 2 },
  { nome: "Arroz", preco: 25.00, validade: 12 },
  { nome: "Iogurte", preco: 4.50, validade: 4 }
];

const calcularDesconto = (preco, validade) => {
  const mesesRestantes = validade - mesAtual;
  return mesesRestantes <= 3 ? preco * 0.20 : preco * 0.05;
};

const calcularStatus = validade =>
  validade < mesAtual ? "Vencido" : "Válido";

const itensCalculados = itens.map(item => {
  const desconto = calcularDesconto(item.preco, item.validade);
  const precoFinal = item.preco - desconto;

  return {
    ...item,
    desconto,
    precoFinal,
    status: calcularStatus(item.validade)
  };
});

const lista = document.getElementById("listaItens");

itensCalculados.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("item", item.status === "Vencido" ? "vencido" : "valido");

  div.innerHTML = `
    <strong>${item.nome}</strong><br>
    Preço original: R$ ${item.preco.toFixed(2)}<br>
    Validade (mês): ${item.validade}<br>
    Desconto: R$ ${item.desconto.toFixed(2)}<br>
    Preço final: R$ ${item.precoFinal.toFixed(2)}<br>
    Status: ${item.status}
  `;

  lista.appendChild(div);
});
