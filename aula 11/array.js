/*
var nome1 = "Edson";
var nome2 = "Gustavo";
var nome3 = "Pedro";

var numero = 3;

var nomes = new Array(numero);
var nome4 = [];


var nome5 = ["Edson", "Gustavo", "Pedro"];

function lista() {
    console.log(nome5[1]);

    nome5[1] = "Emilly";

    console.log(nome5[1]);
}

lista();

var cor =[];

function listaCores() {
    console.log(cor.length);

    cor[1] = "vermelho"
    cor[4] = "azul"
    cor[6] = "amarela"

    console.log(cor.length);
}
*/

function listaCor() {
    var nome =[];

    var contador = 0;

    while (nome !== "") {
        nome[contador] = prompt("bem vindo a chamada! qual o seu nome? ");
        
        if (contador === 3) {
            contador = 10;
            return;
        }
      
        contador++;
    }


    for (let i = 0; i < 20; i++) {
        
    }

}

listaCor();