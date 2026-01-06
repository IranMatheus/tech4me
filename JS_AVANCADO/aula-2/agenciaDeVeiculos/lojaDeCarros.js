const veiculos = [
    { marca: "Ford", modelo: "Focus", ano: 2018, valorCompra: 60000, valorAtual: 65000, cor: "Azul" },
    { marca: "Volkswagen", modelo: "Golf", ano: 2020, valorCompra: 80000, valorAtual: 85000, cor: "Branco" },
    { marca: "Chevrolet", modelo: "Onix", ano: 2022, valorCompra: 70000, valorAtual: 75000, cor: "Prata" },
    { marca: "Fiat", modelo: "Uno", ano: 2010, valorCompra: 25000, valorAtual: 28000, cor: "Vermelho" },
];

const calcularInformacoes = (veiculo) => {
    const lucro = veiculo.valorCompra * 0.03;
    const ipva = veiculo.valorAtual * 0.04;
    const idade = new Date().getFullYear() - veiculo.ano;
    const licenciamento = idade <= 10 ? 160 : 0;

    return {
        ...veiculo,
        lucro: lucro,
        ipva: ipva,
        licenciamento: licenciamento,
    };
};

const veiculosComInformacoes = veiculos.map((veiculo) => calcularInformacoes(veiculo));

const container = document.getElementById('veiculos-container');
veiculosComInformacoes.forEach(veiculo => {
    const div = document.createElement('div');
    div.className = 'vehicle';
    div.innerHTML = `
        <h2>${veiculo.marca} ${veiculo.modelo}</h2>
        <p>Ano: ${veiculo.ano}</p>
        <p>Cor: ${veiculo.cor}</p>
        <p>Lucro: R$ ${veiculo.lucro.toFixed(2)}</p>
        <p>IPVA: R$ ${veiculo.ipva.toFixed(2)}</p>
        <p>Licenciamento: R$ ${veiculo.licenciamento}</p>
    `;
    container.appendChild(div);
});
