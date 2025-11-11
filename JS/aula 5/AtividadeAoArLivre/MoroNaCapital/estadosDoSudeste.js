function obterNomeDoEstado() {
  const siglaUF = prompt("Digite a sigla da UF onde você mora (ex: SP, RJ, MG, ES):").toUpperCase();

  let nomeDoEstado;

  switch (siglaUF) {
    case "SP":
      nomeDoEstado = "São Paulo";
      break;
    case "RJ":
      nomeDoEstado = "Rio de Janeiro";
      break;
    case "MG":
      nomeDoEstado = "Minas Gerais";
      break;
    case "ES":
      nomeDoEstado = "Espírito Santo";
      break;
    default:
      nomeDoEstado = "UF não reconhecida ou não pertencente à região Sudeste.";
  }

  alert(`Você mora em: ${nomeDoEstado}`);
}

obterNomeDoEstado();
