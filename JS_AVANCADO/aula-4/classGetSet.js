class ContaBancaria {    
    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }

    interpolação() {
        return `O saldo atual é R$${this._saldo}`;
    }
}

const conta = new ContaBancaria(1000);

console.log(conta); 
