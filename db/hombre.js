const zapasHombre = [
    {id: 9, imagen: "https://i.postimg.cc/Jzh8NJyt/501b85a2-8e91-4348-b75f-609c18b2bb51.png", nombre: "Nike Air Max 1", precio: 5500, stock: 3},
    {id: 10, imagen: "https://i.postimg.cc/q7hdYTxT/7b57862b-ef88-4e9d-83cb-187bdc4969e8.png", nombre: "Nike Air Max 1 '86 OG G", precio: 6000, stock: 2},
    {id: 11, imagen: "https://i.postimg.cc/9QNhJMTb/ffc3809a-2851-4d96-b8f3-ecde6ac63eef.png", nombre: "Nike Air Max 1", precio: 5500, stock: 1},
    {id: 12, imagen: "https://i.postimg.cc/D0Fk8bkv/258dbcf5-e344-4fbf-9861-8aaf3844e441.png", nombre: "Nike Air Max 1 '86 OG G NRG", precio: 7000, stock: 5},
    {id: 13, imagen: "https://i.postimg.cc/FspmkGH2/b7d9211c-26e7-431a-ac24-b0540fb3c00f.png", nombre: "Nike Air Force 1 '07", precio: 4600, stock: 1},
    {id: 14, imagen: "https://i.postimg.cc/s2kRCNTZ/air-force-1-07-lv8-herrenschuh-ggb31-G.png", nombre: "Nike Air Force 1 '07 LV8", precio: 5000, stock: 2},
    {id: 15, imagen: "https://i.postimg.cc/X744vt4f/0dcce10d-8ef0-4602-b337-f309dc12c88e.png", nombre: "Nike Air Force 1 '07", precio: 4000, stock: 4},
    {id: 16, imagen: "https://i.postimg.cc/NMRvsknC/9586f004-25c7-4e72-bef9-6492f6491a4b.png", nombre: "Nike Air Force 1 '07 WB", precio: 4600, stock: 3},
];

const agregarAlCarrito = (id) => {

    const productoAgregado = zapasHombre.find((item) => item.id === id);

    if (productoAgregado) {
        if (productoAgregado.stock > 0) {
            carrito.push(productoAgregado);
            productoAgregado.stock--;
        } else {
            alert("Te pedimos disculpas, no contamos con Stock disponible para este producto.")
        }
    }
}

zapasHombre.forEach((item) =>{
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <h3 class = card-h3 >${item.nombre}</h3>
    <img class = card-img src="${item.imagen}" alt="${item.nombre}" />
    <p class = card-h3>Precio: $${item.precio}</p>
    <button class = card-btn>Agregar al Carrito</button>
    `;

    let cardsContainerH = document.getElementById("cardsContainerH");
    cardsContainerH.append(div)
});