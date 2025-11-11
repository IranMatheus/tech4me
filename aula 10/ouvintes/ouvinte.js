// Simulação da promoção relâmpago
function promocaoRadioTech4FM() {
  // Número de ingressos disponíveis
  let ingressosDisponiveis = 2; // Cada ouvinte ganha um par, então temos 2 ingressos por pessoa

  // Loop para verificar os ouvintes (no máximo 5)
  for (let ouvinte = 1; ouvinte <= 5; ouvinte++) {
    // Simulação da mensagem do ouvinte (em um cenário real, seria a mensagem recebida)
    let mensagemOuvinte = prompt(`Ouvinte ${ouvinte}, envie sua mensagem para participar da promoção!`);

    // Verifica se o ouvinte enviou uma mensagem
    if (mensagemOuvinte) {
      // Verifica se ainda há ingressos disponíveis
      if (ingressosDisponiveis > 0) {
        alert(`Parabéns, ouvinte ${ouvinte}! Você ganhou um par de ingressos para o cinema!`);
        ingressosDisponiveis--; // Diminui o número de ingressos disponíveis
      } else {
        alert(`Ouvinte ${ouvinte}, infelizmente os ingressos acabaram!`);
      }
    } else {
      alert(`Ouvinte ${ouvinte}, você não enviou nenhuma mensagem.`);
    }
  }

  // Mensagem final após o loop
  if (ingressosDisponiveis === 0) {
    alert("Promoção encerrada! Todos os ingressos foram distribuídos.");
  } else {
    alert(`Ainda restam ${ingressosDisponiveis} par(es) de ingressos disponíveis!`);
  }
}

// Inicia a promoção
promocaoRadioTech4FM();
