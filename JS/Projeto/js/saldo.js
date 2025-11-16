const clientes = ["Rana", "Samantha", "Axl", "Lorena", "Stella"];
const saldos = [ -50.00, 1000.00, 0.00, -200.00, 500.00];

function consultarSaldo() {
    const nomeCliente = prompt("Digite o nome do cliente:");
    const nomeClienteMinusculo = nomeCliente.toLowerCase();

    for (let i = 0; i < clientes.length; i++) {
        const nomeAtual = clientes[i].toLowerCase();
        if (nomeAtual === nomeClienteMinusculo) {
            alert(`O saldo de ${clientes[i]} é: R$ ${saldos[i].toFixed(2)}`);
            return;
        }
    }

    alert("Cliente não encontrado.");
}