function capitalize(frase) {
  const palavras = frase.split(" ");
const palavrasCapitalizadas = [];

  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];

    const primeiraLetra = palavra.charAt(0).toUpperCase();

    const restanteDaPalavra = palavra.slice(1);
    const palavraCapitalizada = primeiraLetra + restanteDaPalavra;

    palavrasCapitalizadas.push(palavraCapitalizada);
  }

  const fraseCapitalizada = palavrasCapitalizadas.join(" ");

  return fraseCapitalizada;
}

// Exemplo de uso
const minhaFrase = "olá mundo, este é um teste";
const fraseCapitalizada = capitalize(minhaFrase);
console.log(fraseCapitalizada); // Output: Olá Mundo, Este É Um Teste
