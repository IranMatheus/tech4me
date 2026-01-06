//ano de fabricação e ano modelo
//vamos preencher as informações do ano do veiculo usando o LIFE. Se o veiculo foi fabricado até //julho, o ano fabricado e ano modelo são iguais. Se fabricado após julho, o ano modelo passa a ser o 
// //ano seguinte ao fabricado

let anoDeFabricacao = (function(mes, ano) {
    if (mes <= 7) {
        console.log(`Ano de Fabricação: ${ano} / Ano Modelo: ${ano}`);
    } else {
        console.log(`Ano de Fabricação: ${ano} / Ano Modelo: ${ano + 1}`);
    }
})(8, 2024);
//anoDeFabricacao(8, 2024);
