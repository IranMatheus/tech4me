class Pessoa {
    constructor(nome, idade, cpf) {
        this._nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }

    get nome() {
        return this._nome;
    }
}

class Funcionario extends Pessoa {
    constructor(profissao, salario, nome, idade, cpf) {
        super(nome, idade, cpf);
        this.profissao = profissao;
        this.salario = salario;
    }
}

const pessoa = new Funcionario("Programadora", "xxxxxx", "Gabriela", 33, "111.111.111-11");
console.log(pessoa);

const salario = pessoa.salario;
console.log(salario);