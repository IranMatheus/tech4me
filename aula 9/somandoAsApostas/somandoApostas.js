function calcularPremioAposta() {
  let numeroDeAmigos = 4;
  let valorDaAposta = [];
  let i = 0;
  let somaDasApostas = 0;
  let apostaValida;

  while (i < numeroDeAmigos) {
    do {
      apostaValida = true;
      let valor = parseFloat(prompt(`Amigo ${i + 1}, qual o valor da sua aposta?`));

      if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido e maior que zero.");
        apostaValida = false;
      } else {
        valorDaAposta.push(valor);
      }
    } while (!apostaValida);
    i++;
  }

  i = 0;
  while (i < valorDaAposta.length) {
    somaDasApostas += valorDaAposta[i];
    i++;
  }


  alert(`O valor total das apostas é: R$ ${somaDasApostas.toFixed(2)}`);
  alert(`Parabéns ao ganhador!`);
}


calcularPremioAposta();
