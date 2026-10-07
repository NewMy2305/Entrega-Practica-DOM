
// Cargamos los productos en un array de objetos.

const productos = [
    {
        name: "Portátil Alurin Flex Advance Intel Core i5-1250P 15.6 / 16GB / 500GB / Windows Home",
        brand: "Alurin",
        price: 52999,
        stars: 3.4,
        reviews: 14,
        seller: "PcComponentes",
        image: "https://thumb.pccomponentes.com/w-150-150/articles/1108/11082870/1646-portatil-alurin-flex-advance-intel-core-i5-1250p-156-16gb-500gb-windows-home-comprar.jpg",


    },
    {
        name: "Portátil Asus Vivobook 16 F1607CA-MB311 16 Intel Core Ultra 5 225H 16GB 512GB SSD Arc 130T Sin Sistema Operativo",
        brand: "Asus",
        price: 59999,
        before: 89999,
        precioMinimo: "¡Precio mínimo histórico!",
        stars: 4.6,
        reviews: 179,
        seller: "PcComponentes",
        image: "https://thumb.pccomponentes.com/w-150-150/articles/1113/11132446/1244-portatil-asus-vivobook-16-f1607ca-mb311-16-intel-core-ultra-5-225h-16gb-512gb-ssd-arc-130t-sin-sistema-operativo.jpg"
    },
    {
        name: "Portátil HP HyperX OMEN 15 15-gb0000ns 15.3 AMD Ryzen 5 240 16GB 512GB SSD RTX 5050 FreeDOS +REGALO",
        brand: "HP",
        price: 94900,
        before: 129900,
        precioMinimo: "¡Precio mínimo histórico!",
        stars: 4.4,
        reviews: 22,
        seller: "PcComponentes",
        image: "https://thumb.pccomponentes.com/w-150-150/articles/1109/11098275/1340-portatil-hp-hyperx-omen-15-15-gb0000ns-153-amd-ryzen-5-240-16gb-512gb-ssd-rtx-5050-freedos-regalo-comprar.jpg", 
    },
    {
        name: "Portátil Lenovo Legion 5 15AHP11 OLED 15.3 AMD Ryzen 7 250 32GB 512GB SSD RTX 5060 FreeDOS",
        brand: "Lenovo",
        price: 129900,
        stars: 4.6,
        reviews: 391,
        seller: "PcComponentes",
        image: "https://thumb.pccomponentes.com/w-150-150/articles/1108/11086487/1630-portatil-lenovo-legion-5-15ahp11-153-amd-ryzen-7-250-32gb-512gb-ssd-rtx-5060-freedos.jpg",
    },
    {
        name: "Portátil HP HyperX OMEN 15-gb0005ns 15.3 AMD Ryzen 7 260 24GB 1TB SSD RTX 5060 FreeDOS + REGALO",
        brand: "HP",
        price: 119900,
        stars: 4.4,
        reviews: 22,
        seller: "PcComponentes",
        image: "https://thumb.pccomponentes.com/w-150-150/articles/1101/11018594/1432-portatil-hp-hyperx-omen-15-gb0005ns-153-amd-ryzen-7-260-24gb-1tb-ssd-rtx-5060-freedos-regalo-review.jpg",  
    },
    {
        name: "Portátil Lenovo LOQ 15IRX10 15.6 Intel Core i7-13645HX 16GB 512GB SSD RTX 5060 FreeDOS",
        brand: "Lenovo",
        price: 99900,
        stars: 4.5,
        reviews: 612,
        seller: "PcComponentes",
        image: "https://thumb.pccomponentes.com/w-150-150/articles/1108/11086488/1448-portatil-lenovo-loq-15irx10-156-intel-core-i7-13645hx-16gb-512gb-ssd-rtx-5060-freedos.jpg",
    },
    {
        name: "Portátil HP Victus 15-fa2092ns 15.6 Intel Core i5-14500HX 16GB 512GB SSD RTX 3050 FreeDOS + REGALO",
        brand: "HP",
        price: 84900,
        before: 119900,
        precioMinimo: "¡Precio mínimo histórico!",
        stars: 4.5,
        reviews: 1006,
        seller: "PcComponentes",
        image: "https://thumb.pccomponentes.com/w-150-150/articles/1109/11098274/191-portatil-hp-victus-15-fa2092ns-156-intel-core-i5-14500hx-16gb-512gb-ssd-rtx-3050-freedos-regalo-comprar.jpg",
    },
    {
        name: "Portátil Lenovo LOQ Essential 15IRX11 15.6 Intel Core i7-13650HX 16GB 512GB SSD RTX 5050 Sin SO",
        brand: "Lenovo",
        price: 89900,
        before: 119900,
        precioMinimo: "¡Precio mínimo histórico!",
        stars: 4.5,
        reviews: 612,
        seller: "PcComponentes",
        image: "https://thumb.pccomponentes.com/w-150-150/articles/1108/11086489/1238-portatil-lenovo-loq-essential-15irx11-156-intel-core-i7-13650hx-16gb-512gb-ssd-rtx-5050-sin-so.jpg",
    },
    {
        name: "Portátil HP OMEN 16 Slim 16-an0066ns 16 Intel Core Ultra 7 255H 16GB 1TB SSD RTX 5060 + REGALO",
        brand: "HP",
        price: 129900,
        stars: 4.5,
        reviews: 745,
        seller: "PcComponentes",
        image: "https://thumb.pccomponentes.com/w-530-530/articles/1109/11098276/1833-portatil-hp-omen-16-slim-16-an0066ns-16-intel-core-ultra-7-255h-16gb-1tb-ssd-rtx-5060-regalo.jpg",
    },
    {
        name: "Portátil Acer Nitro V 15 ANV15-52 15.6 Intel Core i9-13900H 32GB 1TB SSD RTX 5060 Sin Sistema Operativo",
        brand: "HP",
        price: 119900,
        stars: 4.4,
        reviews: 1910,
        seller: "PcComponentes",
        image: "https://thumb.pccomponentes.com/w-530-530/articles/1103/11031615/4248-portatil-acer-nitro-v-15-anv15-52-156-intel-core-i9-13900h-32gb-1tb-ssd-rtx-5060-sin-sistema-operativo-200f9678-c4d8-4aa6-b018-cc4f8a0be58e.jpg"
    }
    
]


// Funcion para definir precio en enteros.


function formatearPrecio(centimos) {
    return (centimos / 100).toLocaleString("es-Es", {
        style: "currency",
        currency: "EUR"
    });
}



//Funcion para cargar las tarjetas de los productos en el html.


function mostrarProductos(){
    
    let cardsHtml = '';

    for (const producto of productos){
        cardsHtml += `
            <div class="card-productos">
                <img src="${producto.image}" alt="${producto.name}">
                <div class="nombre">${producto.name}</div>
                <div>
                <span class="precio-actual-productos ${producto.precioMinimo ? 'precio-rojo' : ''}">
                    ${formatearPrecio(producto.price)}
                </span>
                ${producto.before ? `<span class="precio-anterior">${formatearPrecio(producto.before)}</span>`: ''}
                </div>
                ${producto.precioMinimo ? `<div class="precio-minimo">${producto.precioMinimo}</div>` : ''}
                <div class="valoracion"> ${producto.stars} ⭐ ${producto.reviews} opiniones</div>
                <p>Vendido por ${producto.seller}</p>
            </div>
        `
    }

    document.getElementById("productos").innerHTML = cardsHtml;
}

mostrarProductos();
