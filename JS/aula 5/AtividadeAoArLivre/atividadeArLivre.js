function climaAdequado(temperatura, estaChovendo) {
    if (temperatura < 32 && !estaChovendo) {
        return "O clima está adequado para atividades ao ar livre!";
    } else {
        return "O clima não está adequado para atividades ao ar livre.";
    }
}

// Dados do clima atual
const temperaturaAtual = 26.9; // em graus Celsius
const estaChovendo = false; // não está chovendo

// Verificando se o clima é adequado
const resultado = climaAdequado(temperaturaAtual, estaChovendo);
console.log(resultado); // Saída: O clima e