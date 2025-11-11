function chamadaRadio() {
  let resposta;
  let tentativas = 0;
  const respostaCorreta = "Tech4FM é show!";

  do {
    resposta = prompt("Atenção ouvinte! A Tech4FM está ligando! Diga a frase secreta para ganhar a camiseta!");
    tentativas++;

    if (resposta === null) {
      console.log("Chamada cancelada.");
      return;
    }

    if (resposta !== respostaCorreta) {
      console.log("Resposta incorreta. Tente novamente!");
    }
  } while (resposta !== respostaCorreta && tentativas < 3);

  if (resposta === respostaCorreta) {
    console.log("Parabéns! Você ganhou a camiseta da Tech4FM!");
  } else {
    console.log("Que pena! Você não conseguiu responder a tempo. A frase correta era: " + respostaCorreta);
  }
}

chamadaRadio();
