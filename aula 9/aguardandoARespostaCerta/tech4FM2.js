function chamadaRadio() {
  let resposta;
  let tentativas = 0;
  const respostaCorreta = "Tech4FM é show!";

  while (tentativas < 3) {
    resposta = prompt("Atenção ouvinte! A Tech4FM está ligando! Diga a frase secreta para ganhar a camiseta!");

    if (resposta === null) {
      console.log("Chamada cancelada.");
      return;
    }

    tentativas++;

    if (resposta === respostaCorreta) {
      console.log("Parabéns! Você ganhou a camiseta da Tech4FM!");
      return;
    } else {
      console.log("Resposta incorreta. Tente novamente! Tentativas restantes: " + (3 - tentativas));
    }
  }

  console.log("Que pena! Você não conseguiu responder a tempo. A frase correta era: " + respostaCorreta);
}

chamadaRadio();
