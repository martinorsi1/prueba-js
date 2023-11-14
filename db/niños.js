const zapasNiños = [
    { id: 17, imagen: "https://i.postimg.cc/NfG0xt40/05b36b9c-24cb-48aa-ab85-5f28530a5f37.png", nombre: "Nike Air Force 1", precio: 3100, stock: 5 },
    { id: 18, imagen: "https://i.postimg.cc/SNZxTPTf/0840b446-2393-40fd-b365-b7aa7d8ee635.png", nombre: "Nike Dunk Low", precio: 2850, stock: 1 },
    { id: 19, imagen: "https://i.postimg.cc/C1jKcLXR/4371ac31-97cd-4057-bd6e-41440e39f3b9.png", nombre: "Nike Dunk Low 7", precio: 2850, stock: 1 },
    { id: 20, imagen: "https://i.postimg.cc/wM2jd46H/57217a86-8482-4425-b858-5cf2d4eb0785.png", nombre: "Nike Air Force 1", precio: 3100, stock: 3 },
    { id: 21, imagen: "https://i.postimg.cc/CMs1D5bt/5ff1d265-52ec-4aac-83a2-3302fcb2edbb.png", nombre: "Nike Air Force 1 W", precio: 3100, stock: 4 },
    { id: 22, imagen: "https://i.postimg.cc/x8n1hVVt/a499ec53-6b2e-4ec9-81b3-2438f991c362.png", nombre: "Nike Dunk LowO", precio: 3500, stock: 2 },
    { id: 23, imagen: "https://i.postimg.cc/q76qCGGX/e125b578-4173-401a-ab13-f066979c8848.png", nombre: "Nike Air Force 1", precio: 3100, stock: 2 },
    { id: 24, imagen: "https://i.postimg.cc/B6W651YW/ebad848a-13b1-46d5-a85e-49b4b6a4953c.png", nombre: "Nike Air Force 1 LE", precio: 2850, stock: 5 },
];


zapasNiños.forEach((item) =>{
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <h3 class = card-h3 >${item.nombre}</h3>
    <img class = card-img src="${item.imagen}" alt="${item.nombre}" />
    <p class = card-h3>Precio: $${item.precio}</p>
    <button class = card-btn>Agregar al Carrito</button>
    `;

    let cardsContainerN = document.getElementById("cardsContainerN");
    cardsContainerN.append(div)
});