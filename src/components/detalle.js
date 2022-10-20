import { validarProductoRepetido } from "../cart/cartActions.js";
import { getStock } from "../products/getStock.js";


const modalDetalle = document.getElementById('modal-detalle');



// funcion que muestra el detalle del producto abriendo un modal con la informacion
const detalleProducto = async(productoId) => {
    const productos = await getStock()
    const productoDetallado = productos.find((producto) => producto.id === productoId)

    const mostrarProductoDetallado = (producto) => {
        modalDetalle.classList.remove('hidden')

        modalDetalle.innerHTML = `<div class="detail-img">
                        <img src="${producto.img}" alt="">
                        </div>
                        <div class="detail-text">
                            <p>Precio: $${producto.precio}</p>
                            <p>${producto.modelo}</p>
                            <p>Color: ${producto.color}</p>
                        </div>
                        <div class="buttons">
                            <button class="detalle-comprar" id="detalle-comprar${producto.id}">Comprar</button>
                            <button class="cerrar-detalle" id="cerrar-detalle">X</button>
                        </div>`

        const detalleComprar = document.getElementById(`detalle-comprar${producto.id}`)
        detalleComprar.addEventListener('click', () => {
            validarProductoRepetido(productoId)
            modalDetalle.classList.add('hidden')
        })
        const cerrarDetalle = document.getElementById('cerrar-detalle')
        cerrarDetalle.addEventListener('click', () => {
            modalDetalle.classList.add('hidden')
        })
    }
    productoDetallado ? mostrarProductoDetallado(productoDetallado) : console.log('false')


}


export { detalleProducto, modalDetalle }