    var total = 0;

    function contaMercado(valorProduto, valorDesconto) {
         total = total + valorProduto - valorDesconto;

        console.log("Bipado o produto: "+ nomeProduto +". Valor: R$"+ valorProduto +". Desconto: R$"+ valorDesconto +". Total a pagar: R$"+ total);
        console.log("total: " + total);
    }

        function nomeProduto(produto){
            // var produto = produto:
            // return produto;
            return produto;
        }

    contaMercado(10, 2, nomeProduto("Batata frita"));
    contaMercado(5, 1, nomeProduto("Nuggets"));
    contaMercado(25, 5, nomeProduto("Coca-cola"));