function lista() {
    var listaTenis = [ "Nike", "Adidas", "Puma", "Vans", "All Star" ];

    const texto = listaTenis.join("  ");
    const texto1 = listaTenis.join(" - ");
    const texto2 = listaTenis.join(", ");

    console.log(texto1);
    console.log(texto2);

    console.log(texto);
    console.log(typeof texto);
}
lista();