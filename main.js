const carrito = [];


const agregarAlCarrito = (id) => {

    const productoAgregado = zapasMujer.find((item) => item.id === id);

    if (productoAgregado) {
        if (productoAgregado.stock > 0) {
            carrito.push(productoAgregado);
            productoAgregado.stock--;
        } else {
            alert("Te pedimos disculpas, no contamos con Stock disponible para este producto.")
        }
    }
}


zapasMujer.forEach((item) => {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <h3 class = card-h3 >${item.nombre}</h3>
    <img class = card-img src="${item.imagen}" alt="${item.nombre}" />
    <p class = card-h3>Precio: $${item.precio}</p>
    <button id=boton${item.id} class = card-btn>Agregar al Carrito</button>
    `;

    let cardsContainerM = document.getElementById("cardsContainerM");
    cardsContainerM.append(div)

    let boton = document.getElementById(`boton${item.id}`)
    boton.addEventListener("click", () => agregarAlCarrito(item.id));


});


const verCarrito = document.getElementById("verCarrito");
const carritoContainer = document.getElementById("carritoContainer");

verCarrito.addEventListener("click", () => {
    carritoContainer.innerHTML = "",
    carritoContainer.style.display = "flex";
    const carritoHeader = document.createElement("div");
    carritoHeader.className = "carrito-header"
    carritoHeader.innerHTML = `
    <h2 class = "carrito-header-title">CARRTIO</h2>
    `
    carritoContainer.append(carritoHeader);

    const carritoButton = document.createElement("h1");
    carritoButton.innerText = "X";
    carritoButton.className = "carrito-header-button"

    carritoButton.addEventListener("click", () =>{
        carritoContainer.style.display = "none";
    });

    carritoHeader.append(carritoButton)

    carrito.forEach((item) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "carrito-content";
        carritoContent.innerHTML = `
        <img src="${item.imagen}"/>
        <h3>${item.nombre}</h3>
        <p>$${item.precio}</p>
        `;

    carritoContainer.append(carritoContent);
    });

    const total = carrito.reduce((acum, productoAgregado) => acum + productoAgregado.precio, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `Total a Pagar: $${total}`;
    carritoContainer.append(totalCompra);

});



















//const zapatillas = [
    //     { id: 1, imagen: "https://i.postimg.cc/c4gVYHPS/3928eb18-1f47-4554-8e18-1788f6d5c4f8-1.png", nombre: "Nike Gamma Force", precio: 4000, stock: 3 },
    //     { id: 2, imagen: "https://i.postimg.cc/sDkbJzRZ/d46d9f4f-f0d5-4c07-af57-e08e5b9feeb7-1.png", nombre: "Nike Air Force 1 LX United", precio: 3500, stock: 2 },
    //     { id: 3, imagen: "https://i.postimg.cc/yNB5wTx1/deb6601f-9cab-4564-99d6-ee0349f11d19-1.png", nombre: "Nike Air Force 1 '07", precio: 3000, stock: 3 },
    //     { id: 4, imagen: "https://i.postimg.cc/bw1WC5zV/i1-bf108f08-590a-4de7-94d2-f70b22b7f6b6-1.png", nombre: "Nike Air Force 1 LV8", precio: 3800, stock: 1 },
    //     { id: 5, imagen: "https://i.postimg.cc/5yrhtK5L/e8e242bb-e086-4113-8f31-621a199f04e8.png", nombre: "Nike Air Force 1 LV8", precio: 4100, stock: 3 },
    //     { id: 6, imagen: "https://i.postimg.cc/vTDRbwnG/b01c67f2-2481-45d7-b383-a1476d768f6e.png", nombre: "Nike Air Force 1 '07 Next Nature", precio: 3500, stock: 2 },
    //     { id: 7, imagen: "https://i.postimg.cc/zBxmsGVd/4621066a-6e19-49e5-a2d7-4e7e5eade298-1.png", nombre: "Nike Dunk Low Retro", precio: 4000, stock: 1 },
    //     { id: 8, imagen: "https://i.postimg.cc/XJjS1C7G/1fd49eee-73b0-4293-9ae8-13e11651e943.png", nombre: "Nike Air Force 1 '07", precio: 3550, stock: 5 },
    //     { id: 9, imagen: "https://i.postimg.cc/Jzh8NJyt/501b85a2-8e91-4348-b75f-609c18b2bb51.png", nombre: "Nike Air Max 1", precio: 5500, stock: 3 },
    //     { id: 10, imagen: "https://i.postimg.cc/q7hdYTxT/7b57862b-ef88-4e9d-83cb-187bdc4969e8.png", nombre: "Nike Air Max 1 '86 OG G", precio: 6000, stock: 2 },
    //     { id: 11, imagen: "https://i.postimg.cc/9QNhJMTb/ffc3809a-2851-4d96-b8f3-ecde6ac63eef.png", nombre: "Nike Air Max 1", precio: 5500, stock: 1 },
    //     { id: 12, imagen: "https://i.postimg.cc/D0Fk8bkv/258dbcf5-e344-4fbf-9861-8aaf3844e441.png", nombre: "Nike Air Max 1 '86 OG G NRG", precio: 7000, stock: 5 },
    //     { id: 13, imagen: "https://i.postimg.cc/FspmkGH2/b7d9211c-26e7-431a-ac24-b0540fb3c00f.png", nombre: "Nike Air Force 1 '07", precio: 4600, stock: 1 },
    //     { id: 14, imagen: "https://i.postimg.cc/s2kRCNTZ/air-force-1-07-lv8-herrenschuh-ggb31-G.png", nombre: "Nike Air Force 1 '07 LV8", precio: 5000, stock: 2 },
    //     { id: 15, imagen: "https://i.postimg.cc/X744vt4f/0dcce10d-8ef0-4602-b337-f309dc12c88e.png", nombre: "Nike Air Force 1 '07", precio: 4000, stock: 4 },
    //     { id: 16, imagen: "https://i.postimg.cc/NMRvsknC/9586f004-25c7-4e72-bef9-6492f6491a4b.png", nombre: "Nike Air Force 1 '07 WB", precio: 4600, stock: 3 },
    //     { id: 17, imagen: "https://i.postimg.cc/NfG0xt40/05b36b9c-24cb-48aa-ab85-5f28530a5f37.png", nombre: "Nike Air Force 1", precio: 3100, stock: 5 },
    //     { id: 18, imagen: "https://i.postimg.cc/SNZxTPTf/0840b446-2393-40fd-b365-b7aa7d8ee635.png", nombre: "Nike Dunk Low", precio: 2850, stock: 1 },
    //     { id: 19, imagen: "https://i.postimg.cc/C1jKcLXR/4371ac31-97cd-4057-bd6e-41440e39f3b9.png", nombre: "Nike Dunk Low 7", precio: 2850, stock: 1 },
    //     { id: 20, imagen: "https://i.postimg.cc/wM2jd46H/57217a86-8482-4425-b858-5cf2d4eb0785.png", nombre: "Nike Air Force 1", precio: 3100, stock: 3 },
    //     { id: 21, imagen: "https://i.postimg.cc/CMs1D5bt/5ff1d265-52ec-4aac-83a2-3302fcb2edbb.png", nombre: "Nike Air Force 1 W", precio: 3100, stock: 4 },
    //     { id: 22, imagen: "https://i.postimg.cc/x8n1hVVt/a499ec53-6b2e-4ec9-81b3-2438f991c362.png", nombre: "Nike Dunk LowO", precio: 3500, stock: 2 },
    //     { id: 23, imagen: "https://i.postimg.cc/q76qCGGX/e125b578-4173-401a-ab13-f066979c8848.png", nombre: "Nike Air Force 1", precio: 3100, stock: 2 },
    //     { id: 24, imagen: "https://i.postimg.cc/B6W651YW/ebad848a-13b1-46d5-a85e-49b4b6a4953c.png", nombre: "Nike Air Force 1 LE", precio: 2850, stock: 5 },
    // ];
    
    
    // const carrito = [];
    
    
    
    
    // let flitradoM = zapatillas.filter((item) => item.id > 0 && item.id <9);
    
    // flitradoM.forEach((item) => {
    //     const div = document.createElement("div");
    //     div.className = "card";
    //     div.innerHTML = `
    //     <h3 class = card-h3 >${item.nombre}</h3>
    //     <img class = card-img src="${item.imagen}" alt="${item.nombre}" />
    //     <p class = card-h3>Precio: $${item.precio}</p>
    //     <button id=boton${item.id} class = card-btn>Agregar al Carrito</button>
    //     `;
    
    //     let cardsContainerM = document.getElementById("cardsContainerM");
    //     cardsContainerM.append(div)
    
    //     const boton = document.getElementById(`boton${item.id}`)
    //     boton.addEventListener("click", () => agregarAlCarrito(item));
    
    
    // });
    
    
    // let flitradoH = zapatillas.filter((item) => item.id > 8 && item.id <17);
    
    // flitradoH.forEach((item) => {
    //     const div = document.createElement("div");
    //     div.className = "card";
    //     div.innerHTML = `
    //     <h3 class = card-h3 >${item.nombre}</h3>
    //     <img class = card-img src="${item.imagen}" alt="${item.nombre}" />
    //     <p class = card-h3>Precio: $${item.precio}</p>
    //     <button id=boton${item.id} class = card-btn>Agregar al Carrito</button>
    //     `;
    
    //     let cardsContainerH = document.getElementById("cardsContainerH");
    //     cardsContainerH.append(div)
    
    //     const boton = document.getElementById(`boton${item.id}`)
    //     boton.addEventListener("click", () => agregarAlCarrito(item));
    
    
    // });
    
    
    // let flitradoN = zapatillas.filter((item) => item.id > 16);
    
    // flitradoN.forEach((item) => {
    //     const div = document.createElement("div");
    //     div.className = "card";
    //     div.innerHTML = `
    //     <h3 class = card-h3 >${item.nombre}</h3>
    //     <img class = card-img src="${item.imagen}" alt="${item.nombre}" />
    //     <p class = card-h3>Precio: $${item.precio}</p>
    //     <button id=boton${item.id} class = card-btn>Agregar al Carrito</button>
    //     `;
    
    //     let cardsContainerN = document.getElementById("cardsContainerN");
    //     cardsContainerN.append(div)
    
    //     const boton = document.getElementById(`boton${item.id}`)
    //     boton.addEventListener("click", () => agregarAlCarrito(item));
    
    
    // });
    
    
    
    // const agregarAlCarrito = (productoAgregado) => {
    //     if (productoAgregado.stock > 0) {
    //         carrito.push(productoAgregado);
    //         productoAgregado.stock--;
    //     } else {
    //         alert("Te pedimos disculpas, no contamos con Stock disponible para este producto.")
    //     }
    // };
    
    
    
    // const verCarrito = document.getElementById("verCarrito");
    // const carritoContainer = document.getElementById("carritoContainer");
    
    // verCarrito.addEventListener("click", () => {
    //     carritoContainer.innerHTML = "",
    //     carritoContainer.style.display = "flex";
    //     const carritoHeader = document.createElement("div");
    //     carritoHeader.className = "carrito-header"
    //     carritoHeader.innerHTML = `
    //     <h2 class = "carrito-header-title">CARRITO</h2>
    //     `
    //     carritoContainer.append(carritoHeader);
    
    //     const carritoButton = document.createElement("h1");
    //     carritoButton.innerText = "X";
    //     carritoButton.className = "carrito-header-button"
    
    //     carritoButton.addEventListener("click", () =>{
    //         carritoContainer.style.display = "none";
    //     });
    
    //     carritoHeader.append(carritoButton)
    
    //     carrito.forEach((item) => {
    //         const carritoContent = document.createElement("div");
    //         carritoContent.className = "carrito-content";
    //         carritoContent.innerHTML = `
    //         <img src="${item.imagen}"/>
    //         <h3>${item.nombre}</h3>
    //         <p>$${item.precio}</p>
    //         `;
    
    //     carritoContainer.append(carritoContent);
    //     });
    
    //     const total = carrito.reduce((acum, productoAgregado) => acum + productoAgregado.precio, 0);
    
    //     const totalCompra = document.createElement("div");
    //     totalCompra.className = "total-content"
    //     totalCompra.innerHTML = `Total a Pagar: $${total}`;
    //     carritoContainer.append(totalCompra);
    
    // });
    





































// class Zapas {
//     constructor(id, nombre, precio, stock) {
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }
// };



// const zapasMujer = [];
// const zapasHombre = [];
// const zapasNiños = [];

// zapasMujer.push(new Zapas(1, "Nike Air Force 1 Shadow", 4000, 3));
// zapasMujer.push(new Zapas(2, "Nike Air Jordan 1 Elevate Low", 3500, 2));
// zapasMujer.push(new Zapas(3, "Nike Gamma Force", 3000, 3));
// zapasMujer.push(new Zapas(4, "Nike Air Force 1 '07 Next Nature", 3800, 1));

// zapasHombre.push(new Zapas(5, "Nike Air Force 1 '07", 4600, 3));
// zapasHombre.push(new Zapas(6, "Nike SB Dunk Low", 3500, 2));
// zapasHombre.push(new Zapas(7, "Nike Dunk Low Retro", 4000, 1));
// zapasHombre.push(new Zapas(8, "Nike Air Force 1 Luxe", 5500, 5));

// zapasNiños.push(new Zapas(9, "Nike Force 1 LE", 2000, 2));
// zapasNiños.push(new Zapas(10, "Nike Dunk Low", 2500, 5));
// zapasNiños.push(new Zapas(11, "Nike Air Force 1", 2800, 4));
// zapasNiños.push(new Zapas(12, "Nike Air Force 1 Impact Next Nature", 3000, 1));











// const carrito = [];


// const zapasMujer = [
//     {id: 1, imagen: "https://i.postimg.cc/c4gVYHPS/3928eb18-1f47-4554-8e18-1788f6d5c4f8-1.png", nombre: "Nike Gamma Force", precio: 4000, stock: 3},
//     {id: 2, imagen: "https://i.postimg.cc/sDkbJzRZ/d46d9f4f-f0d5-4c07-af57-e08e5b9feeb7-1.png", nombre: "Nike Air Force 1 LX United", precio: 3500, stock: 2},
//     {id: 3, imagen: "https://i.postimg.cc/yNB5wTx1/deb6601f-9cab-4564-99d6-ee0349f11d19-1.png", nombre: "Nike Air Force 1 '07", precio: 3000, stock: 3},
//     {id: 4, imagen: "https://i.postimg.cc/bw1WC5zV/i1-bf108f08-590a-4de7-94d2-f70b22b7f6b6-1.png", nombre: "Nike Air Force 1 LV8", precio: 3800, stock: 1},
//     {id: 5, imagen: "https://i.postimg.cc/5yrhtK5L/e8e242bb-e086-4113-8f31-621a199f04e8.png", nombre: "Nike Air Force 1 LV8", precio: 4100, stock: 3},
//     {id: 6, imagen: "https://i.postimg.cc/vTDRbwnG/b01c67f2-2481-45d7-b383-a1476d768f6e.png", nombre: "Nike Air Force 1 '07 Next Nature", precio: 3500, stock: 2},
//     {id: 7, imagen: "https://i.postimg.cc/zBxmsGVd/4621066a-6e19-49e5-a2d7-4e7e5eade298-1.png", nombre: "Nike Dunk Low Retro", precio: 4000, stock: 1},
//     {id: 8, imagen: "https://i.postimg.cc/XJjS1C7G/1fd49eee-73b0-4293-9ae8-13e11651e943.png", nombre: "Nike Air Force 1 '07", precio: 3550, stock: 5},
// ];


// const zapasHombre = [
//     {id: 9, imagen: "https://i.postimg.cc/Jzh8NJyt/501b85a2-8e91-4348-b75f-609c18b2bb51.png", nombre: "Nike Air Max 1", precio: 5500, stock: 3},
//     {id: 10, imagen: "https://i.postimg.cc/q7hdYTxT/7b57862b-ef88-4e9d-83cb-187bdc4969e8.png", nombre: "Nike Air Max 1 '86 OG G", precio: 6000, stock: 2},
//     {id: 11, imagen: "https://i.postimg.cc/9QNhJMTb/ffc3809a-2851-4d96-b8f3-ecde6ac63eef.png", nombre: "Nike Air Max 1", precio: 5500, stock: 1},
//     {id: 12, imagen: "https://i.postimg.cc/D0Fk8bkv/258dbcf5-e344-4fbf-9861-8aaf3844e441.png", nombre: "Nike Air Max 1 '86 OG G NRG", precio: 7000, stock: 5},
//     {id: 13, imagen: "https://i.postimg.cc/FspmkGH2/b7d9211c-26e7-431a-ac24-b0540fb3c00f.png", nombre: "Nike Air Force 1 '07", precio: 4600, stock: 1},
//     {id: 14, imagen: "https://i.postimg.cc/s2kRCNTZ/air-force-1-07-lv8-herrenschuh-ggb31-G.png", nombre: "Nike Air Force 1 '07 LV8", precio: 5000, stock: 2},
//     {id: 15, imagen: "https://i.postimg.cc/X744vt4f/0dcce10d-8ef0-4602-b337-f309dc12c88e.png", nombre: "Nike Air Force 1 '07", precio: 4000, stock: 4},
//     {id: 16, imagen: "https://i.postimg.cc/NMRvsknC/9586f004-25c7-4e72-bef9-6492f6491a4b.png", nombre: "Nike Air Force 1 '07 WB", precio: 4600, stock: 3},
// ];


// const zapasNiños = [
//     {id: 16, imagen: "https://i.postimg.cc/NfG0xt40/05b36b9c-24cb-48aa-ab85-5f28530a5f37.png", nombre: "Nike Air Force 1", precio: 3100, stock: 5},
//     {id: 17, imagen: "https://i.postimg.cc/SNZxTPTf/0840b446-2393-40fd-b365-b7aa7d8ee635.png", nombre: "Nike Dunk Low", precio: 2850, stock: 1},
//     {id: 18, imagen: "https://i.postimg.cc/C1jKcLXR/4371ac31-97cd-4057-bd6e-41440e39f3b9.png", nombre: "Nike Dunk Low 7", precio: 2850, stock: 1},
//     {id: 19, imagen: "https://i.postimg.cc/wM2jd46H/57217a86-8482-4425-b858-5cf2d4eb0785.png", nombre: "Nike Air Force 1", precio: 3100, stock: 3},
//     {id: 20, imagen: "https://i.postimg.cc/CMs1D5bt/5ff1d265-52ec-4aac-83a2-3302fcb2edbb.png", nombre: "Nike Air Force 1 W", precio: 3100, stock: 4},
//     {id: 21, imagen: "https://i.postimg.cc/x8n1hVVt/a499ec53-6b2e-4ec9-81b3-2438f991c362.png", nombre: "Nike Dunk LowO", precio: 3500, stock: 2},
//     {id: 22, imagen: "https://i.postimg.cc/q76qCGGX/e125b578-4173-401a-ab13-f066979c8848.png", nombre: "Nike Air Force 1", precio: 3100, stock: 2},
//     {id: 23, imagen: "https://i.postimg.cc/B6W651YW/ebad848a-13b1-46d5-a85e-49b4b6a4953c.png", nombre: "Nike Air Force 1 LE", precio: 2850, stock: 5},
// ];





// zapasMujer.forEach((item) =>{
//     let div = document.createElement("div");
//     div.innerHTML = `
//     <div class = card >
//     <h3 class = card-h3 >${item.nombre}</h3>
//     <img class = card-img src="${item.imagen}" alt="${item.nombre}" />
//     <p class = card-h3>Precio: $${item.precio}</p>
//     <button class = card-btn>Agregar al Carrito</button>
//     </div>
//     `;

//     let cardsContainerM = document.getElementById("cardsContainerM");
//     cardsContainerM.append(div)
// });


// zapasHombre.forEach((item) =>{
//     let div = document.createElement("div");
//     div.innerHTML = `
//     <div class = card >
//     <h3 class = card-h3 >${item.nombre}</h3>
//     <img class = card-img src="${item.imagen}" alt="${item.nombre}" />
//     <p class = card-h3>Precio: $${item.precio}</p>
//     <button class = card-btn>Agregar al Carrito</button>
//     </div>
//     `;

//     let cardsContainerH = document.getElementById("cardsContainerH");
//     cardsContainerH.append(div)
// });


// zapasNiños.forEach((item) =>{
//     let div = document.createElement("div");
//     div.innerHTML = `
//     <div class = card >
//     <h3 class = card-h3 >${item.nombre}</h3>
//     <img class = card-img src="${item.imagen}" alt="${item.nombre}"/>
//     <p class = card-h3 >Precio: ${item.precio}</p>
//     <button class = card-btn >Agregar al Carrito</button>
//     </div>
//     `;

//     let cardsContainerN = document.getElementById("cardsContainerN");
//     cardsContainerN.append(div)
// })











// alert(`Te damos la bienvenida a ZapasAn!!!
// El mejor lugar para comprar Zapatillas a tu estilo en Uruguay`);
// let nombre = prompt("Por favor ingrese su Nombre");
// alert(`Bienvenido ${nombre}!`);
// alert(`Tenemos lo que buscas!! Nuestro extenso catalogo se divide en tres Secciones: Mujer  Hombre  Niños`);

// let seccion = prompt("Por favor ingrese la sección deseada para ver el catalogo de productos").toUpperCase();

// while (seccion != "MUJER" && seccion != "HOMBRE" && seccion != "NIÑOS") {
//     alert("Por favor ingrese la sección correcta!");
//     seccion = prompt(`Tenemos lo que buscas!! Nuestro extenso catalogo se divide en tres Secciones: Mujer  Hombre  Niños`).toUpperCase();
// }

// function realizarCompra(zapas, seccion) {
//     alert(`Genial ${nombre}! Elegiste la sección para ${seccion}`);

//     while (true) {
//         const agregarId = prompt(`Ingrese el Numero del ID para agregar en el carrito:\n\n${zapas.map(item => `Id: ${item.id} Nombre: ${item.nombre} Precio: $${item.precio} UYU Stock: ${item.stock}`).join("\n")}\n\nPara ir al Carrito y finalizar la compra escriba ESC`).toUpperCase();

//         if (agregarId === "ESC") {
//             const total = carrito.reduce((acum, productoAgregado) => acum + productoAgregado.precio, 0);
//             alert(`CARRITO DE COMPRAS:\n\n${carrito.map(item => `Nombre: ${item.nombre} Precio: ${item.precio}`).join("\n")}\n\nTOTAL: $${total} UYU`);
//             break;
//         }

//         const productoAgregado = zapas.find((item) => item.id === Number(agregarId));

//         if (productoAgregado) {
//             if (productoAgregado.stock > 0) {
//                 carrito.push(productoAgregado);
//                 productoAgregado.stock--;
//                 alert(`Las ${productoAgregado.nombre} han sido agregadas al carrito!`);
//             } else {
//                 alert("Te pedimos disculpas, no contamos con Stock disponible para este producto.")
//             }
//         } else {
//             alert("Producto no encontrado. Por favor ingrese el Numero correcto de ID!");
//         }
//     }
// }

// switch (seccion) {
//     case "MUJER":
//         realizarCompra(zapasMujer, "Mujeres");
//         break;

//     case "HOMBRE":
//         realizarCompra(zapasHombre, "Hombres");
//         break;

//     case "NIÑOS":
//         realizarCompra(zapasNiños, "Niños");
//         break;
// };


// const total = carrito.reduce((acum, productoAgregado) => acum + productoAgregado.precio, 0);
// const aumento = (total, aumento) => total * aumento;

// let aumento1 = 1.05;
// let aumento2 = 1.10;
// let aumento3 = 1.15;
// let aumento4 = 1.20;

// alert("A continuacion elija el Metodo de Pago para realizar la compra");
// let metodoDePago = Number(prompt("Metodo de Pago:1-Transferencia Bancaria 2-Trarjeta de Credito"));

// while (metodoDePago != 1 && metodoDePago != 2) {
//     alert("Por favor Ingrese el Numero correcto de la opcion deseada");
//     metodoDePago = Number(prompt("Metodo de Pago:1-Tranferencia Bancaria 2-Trarjeta de Credito"));
// };

// switch (metodoDePago) {
//     case 1:
//         alert(`Haz elegido la opcion Tranferencia bancaria. El precio final es de $${total} UYU`);
//         break;

//     case 2:
//         alert("Haz elegido la opcion Tarjeta de Credito, lo cual genera un aumento del precio final de las Zapas!");

//         let numeroCuotas = Number(prompt("Por favor elija la cantidad de cuotas a Pagar: 2  4  6  10"));

//         while (numeroCuotas != 2 && numeroCuotas != 4 && numeroCuotas != 6 && numeroCuotas != 10) {
//             alert("Por favor elija la cantidad correcta de cuotas");
//             numeroCuotas = Number(prompt("Por favor elija la cantidad de cuotas a Pagar: 2  4  6  10"));
//         }

//         let precioAumento;

//         switch (numeroCuotas) {
//             case 2:
//                 precioAumento = aumento(total, aumento1);
//                 alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
//                 break;

//             case 4:
//                 precioAumento = aumento(total, aumento2);
//                 alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
//                 break;

//             case 6:
//                 precioAumento = aumento(total, aumento3);
//                 alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
//                 break;

//             case 10:
//                 precioAumento = aumento(total, aumento4);
//                 alert(`Perfecto, el precio final es de $${precioAumento} UYU`);
//                 break;
//         }
//         break;
// };
