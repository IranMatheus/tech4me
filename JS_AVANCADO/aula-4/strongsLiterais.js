const texto = `posso escrever 
        um texto 
        com quebras de linha`

console.log(texto);

//////////////////////////////////

const soma = `soma: ${2 + 2}`;

console.log(soma);

//////////////////////////////////

const nome = "Maria"
const dizer = `Olá, ${nome}`;
// const dizer = "Olá, " + nome;

////////////////////////////////

const hora = 20;
const frase = `tenha uma boa ${(() => {
    if (hora > 18) {
        return "noite";
    } else {
        return "tarde";
    }
})()}`;