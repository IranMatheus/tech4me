// Verificar se no array inicializado existem os seguintes nomes: "Vovó Mafalda", "Lobo Mal" e "Branca de Neve".
function varrrerLista() {
    var nomes = ["Papai noel", "Vovó Mafalda", "Coelhinho da Páscoa", "Lobo Mal", "Branca de Neve"];
    var listaNomes = [];

  
    for (var i = 0; i < nomes.length; i++) {
    //    console.log(nomes[i]);
 
        if (nomes[i] === "Vovó Mafalda" || nomes[i] === "Lobo Mal" || nomes[i] === "Branca de Neve") {
            listaNomes.push(nomes[i]);
        }
    }
    console.log("lista: " + listaNomes);
}

varrrerLista();