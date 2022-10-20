import { validarProductoRepetido } from "./src/cart/cartActions.js";

import { detalleProducto, modalDetalle } from "./src/components/detalle.js";
import { getStock } from "./src/products/getStock.js";

// funcion que muestra los productos en pantalla
const mostrarProductos = async() => {
    const cardsContainer = document.getElementById('products-display');

    const productos = await getStock()

    productos.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML += `<div class="card-frame">
                            <img src="${producto.img}" alt="">
                            <div class="card-text">
                                <p>Modelo: ${producto.modelo}</p>
                                <p>Precio: $${producto.precio}</p>
                                <p>Color: ${producto.color}</p>
                            </div>
                            <button id="comprar${producto.id}">Comprar</button>
                            <button id="detalle${producto.id}">Detalle</button>
                        </div>`
        cardsContainer.appendChild(div)

        const comprarProducto = document.getElementById(`comprar${producto.id}`)
        comprarProducto.addEventListener('click', () => {
            validarProductoRepetido(producto.id)

        })
        const mostrarDetalle = document.getElementById(`detalle${producto.id}`)
        mostrarDetalle.addEventListener('click', () => {
            modalDetalle.classList.remove('hidden')
            console.log(producto.id)
            detalleProducto(producto.id)
        })

    })
}




export { mostrarProductos }