function totemLanchonete() {
  let nomeSanduiche = prompt("Bem-vindo(a) ao totem! Qual sanduíche você gostaria?");
  let acompanhamentos = [];
  let valorTotal = 0;

  if (nomeSanduiche) {
    valorTotal += 10;

    while (acompanhamentos.length < 5) {
      let acompanhamento = prompt(
        "Deseja adicionar algum acompanhamento? (Digite 'concluir' para finalizar)"
      );

      if (acompanhamento && acompanhamento.toLowerCase() === "concluir") {
        break;
      }

      if (acompanhamento) {
        acompanhamentos.push(acompanhamento);
        valorTotal += 2;
      } else {
        break;
      }
    }

    
    console.log("Pedido:");
    console.log("Sanduíche: " + nomeSanduiche);
    if (acompanhamentos.length > 0) {
      console.log("Acompanhamentos: " + acompanhamentos.join(", "));
    } else {
      console.log("Sem acompanhamentos");
    }
    console.log("Valor total a pagar: R$ " + valorTotal.toFixed(2));
  } else {
    console.log("Pedido cancelado.");
  }
}