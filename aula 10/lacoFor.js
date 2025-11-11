function exwhile() {
    var resposta = prompt("Qual é a sua resposta?");
    while (resposta === "feliz natal!") {
    contador++
        // ...
    }
 
    var contador = 1;
    while (contador <=5) {
    contador++
     // ...
    }
}

function exfor() {
    for( var i=0; i <= 5; i++ ) {
        // ...
    }


    ////////////////////////////////////////////
    var valorInicial = 5;
    var valorFinal = 0;
    for( var i = valorInicial; i <= valorFinal; i--) {
        // ...
    }
}

function encadeamentoLaco() {
    for( var i=0; i < 2; i++ ) { 
        console.log("entrou no for de fora:  " + i + " vezes!");

        for( var j=0; j < 2; j++ ) {
            console.log("  entrou no for de dentro: " + j + " vezes!");
        }
    }
}