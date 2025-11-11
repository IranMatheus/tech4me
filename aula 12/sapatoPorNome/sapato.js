const gavetas = {
  "primeira gaveta": {
    sapato1: "tênis",
    sapato2: "sandália"
  },
  "segunda gaveta": {
    sapato3: "bota",
    sapato4: "chinelo"
  },
};

function localizarSapato(nomeSapato, gavetas) {
  for (const gaveta in gavetas) {
    if (gavetas.hasOwnProperty(gaveta)) {
      for (const sapato in gavetas[gaveta]) {
        if (gavetas[gaveta].hasOwnProperty(sapato) && gavetas[gaveta][sapato] === nomeSapato) {
          return `O sapato "${nomeSapato}" está na ${gaveta}.`;
        }
      }
    }
  }
  return `O sapato "${nomeSapato}" não foi encontrado.`;
}

const nomeDoSapato = prompt("Qual sapato você está procurando?");
const resultado = localizarSapato(nomeDoSapato, gavetas);
alert(resultado);
