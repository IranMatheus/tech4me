// de/para

// escolha (valor){
//    caso literal;
//    <executar a instrução>
//}

var fruta = "kiwi"
switch (fruta) {
    case "abacaxi": console.log("O chá da casca e da fruta é muito bom");
        break;
    case "kiwi": console.log("minha fruta favorita!");
        break;
    case "melancia":
    case "laranja": console.log("laranja e melancia são frutas refrescante!");
        break;
    default: console.log("A fruta selecionada não foi encontrada!")
}