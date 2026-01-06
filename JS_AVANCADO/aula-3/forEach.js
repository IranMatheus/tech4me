const transporte =() => {
    const listatransporte = ['carro', 'moto', 'bicicleta', 'ônibus'];

    listatransporte.forEach((valor, indice) => {
        console.log(indice, valor);
    })
};

transporte();