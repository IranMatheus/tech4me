const veiculos = [
    { marca: "Ford", modelo: "Focus", ano: 2018, valorCompra: 60000, valorAtual: 65000, cor: "Azul" },
    { marca: "Volkswagen", modelo: "Golf", ano: 2020, valorCompra: 80000, valorAtual: 85000, cor: "Branco" },
    { marca: "Chevrolet", modelo: "Onix", ano: 2022, valorCompra: 70000, valorAtual: 75000, cor: "Prata" },
    { marca: "Fiat", modelo: "Uno", ano: 2010, valorCompra: 25000, valorAtual: 28000, cor: "Vermelho" },
];

const filtrarSeminovos = (veiculos) => {
    const anoAtual = new Date().getFullYear();
    return veiculos.filter(veiculo => (anoAtual - veiculo.ano) < 10);
};

const veiculosSeminovos = filtrarSeminovos(veiculos);

console.log(veiculosSeminovos);
