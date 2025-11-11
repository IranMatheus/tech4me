function calcularPedido() {
  let sanduiche = prompt("Bem-vindo(a) ao totem da lanchonete! Qual o nome do seu sanduíche?");
  let acompanhamentos = [];
  let valorTotal = 0;
  const valorAcompanhamento = 2.00;

  if (sanduiche) {
    valorTotal += 0; // O sanduíche em si não tem custo aqui, mas pode ser ajustado se necessário.

    for (let i = 1; i <= 5; i++) {
      let acompanhamento = prompt(`Digite o ${i}º acompanhamento (ou 'concluir'):`);
      if (acompanhamento && acompanhamento.toLowerCase() !== 'concluir') {
        acompanhamentos.push(acompanhamento);
        valorTotal += valorAcompanhamento;
      } else {
        break; // Sai do loop se o cliente digitar "concluir"
      }
    }

    // Exibe o pedido completo e o valor a pagar
    let mensagemPedido = `Seu pedido:\nSanduíche: ${sanduiche}\nAcompanhamentos: ${acompanhamentos.join(', ') || 'Nenhum'}\nValor total: R$ ${valorTotal.toFixed(2)}`;
    alert(mensagemPedido);
  } else {
    alert("Pedido cancelado. Nenhum sanduíche foi selecionado.");
  }
}

calcularPedido();
