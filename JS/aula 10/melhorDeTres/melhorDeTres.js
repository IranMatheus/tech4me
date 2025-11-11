function pergunta() {
  for (var i = 0; i < 3; i++ ) {
    alert("Qual a capital do Brasil?");
    var acertou = false;
    for (var j = 0; j <= 1; j++) {
      var resposta = prompt("Digite sua resposta:");
      if (resposta === "Brasília") {
        alert("Parabéns! Você ganhou a caneca!");
        acertou = true;
        break;
      } else if (j < 1) {
        alert("Resposta incorreta. Tente novamente.");
      } else {
        alert("Resposta incorreta.");
      }
    }
    if (acertou) {
      alert("Temos um vencedor!");
      return;
    } else {
      alert("Vamos para o próximo participante");
    }
  }
  alert("Acabaram as tentativas!");
}


pergunta()