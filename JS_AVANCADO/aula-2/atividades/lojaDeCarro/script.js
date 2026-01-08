const anoAtual = new Date().getFullYear();

const carros = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2018,
    valorCompra: 60000,
    valorAtual: 75000,
    cor: "Prata"
  },
  {
    marca: "Honda",
    modelo: "Civic",
    ano: 2012,
    valorCompra: 45000,
    valorAtual: 52000,
    cor: "Preto"
  }
];


const calcularValores = carro => ({
  ...carro,
  lucro: carro.valorCompra * 0.03,
  ipva: carro.valorAtual * 0.04,
  licenciamento: (anoAtual - carro.ano) <= 10 ? 160 : 0
});

const carrosCalculados = carros.map(calcularValores);

const lista = document.getElementById("listaCarros");

lista.innerHTML = carrosCalculados.map(carro => `
  <div class="carro">
    <strong>${carro.marca} ${carro.modelo}</strong><br>
    Ano: ${carro.ano}<br>
    Cor: ${carro.cor}<br>
    Valor de Compra: R$ ${carro.valorCompra.toFixed(2)}<br>
    Valor Atual: R$ ${carro.valorAtual.toFixed(2)}<br>
    Lucro da Loja: R$ ${carro.lucro.toFixed(2)}<br>
    IPVA: R$ ${carro.ipva.toFixed(2)}<br>
    Licenciamento: R$ ${carro.licenciamento.toFixed(2)}
  </div>
`).join("");