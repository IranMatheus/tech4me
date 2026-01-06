class ContaBancaria {    
    constructor(valor) {
        this._saldo = valor;
}

    get saldo() {
        return this.saldo;
    }
}

const conta = new ContaBancaria(1000);

console.log(conta._saldo);

console.log(conta);
