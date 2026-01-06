const anfibios = [
    "Sapo-cururu",
    "Rã-touro",
    "Salamandra",
    "Tritão",
    "Axolote",
    "Perereca-verde",
    "Rã-dardo-venenosa",
    "Cecília",
    "Sapo-de-chifre",
    "Rã-arborícola"
];

const lista = document.getElementById("lista-anfibios");

anfibios.forEach((anfibio, index) => {
    const item = document.createElement("li");
    item.textContent = anfibio;

    if (index % 2 === 0) {
        item.style.backgroundColor = "#d1f0ff";
    } else {
        item.style.backgroundColor = "#b3e5c9";
    }

    item.style.padding = "8px";
    lista.appendChild(item);
});
