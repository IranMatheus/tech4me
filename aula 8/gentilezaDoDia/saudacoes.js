function gentileza() {
  const agora = new Date(); // Obtém a data e hora atuais
  const hora = agora.getHours(); // Obtém a hora atual (0-23)

  let saudacao;

  if (hora >= 6 && hora < 12) {
    saudacao = "Bom dia!";
  } else if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde!";
  } else {
    saudacao = "Boa noite!";
  }

  console.log(saudacao);
}

gentileza();
