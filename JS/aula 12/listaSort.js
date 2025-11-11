function lista() {
    const nomeOriginal = ["flamengo", "vasco", "botafogo", "fluminense", "corinthians"];

    console.log(nomeOriginal);

    const nomeCopia = nomeOriginal;

   
    nomeCopia.sort();
    nomeOriginal.sort();

    console.log(nomeOriginal);
    console.log(nomeCopia);
}

lista();