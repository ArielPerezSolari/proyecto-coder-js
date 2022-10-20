import { getCarritoStorage } from "../../storage.js"
import { eliminarProductoCarrito, pintarCarrito, vaciar } from "../cart/cartActions.js"
import { modalDetalle } from "./detalle.js"

const modalContainer = document.getElementById('modal-container')
const abrirCarrito = document.getElementById('open-cart')
const cerrarCarrito = document.getElementById('close-cart')
const modalCarrito = document.querySelector('.modal-cart')
const vaciarCarrito = document.getElementById('empty-cart')
const checkout = document.getElementById('finish')

// abre el carrito
abrirCarrito.addEventListener('click', () => {
        modalContainer.classList.remove('hidden')
        modalDetalle.classList.add('hidden')
    })
    // cierra carrito
cerrarCarrito.addEventListener('click', () => {
        modalContainer.classList.add('hidden')
    })
    // vacia el carrito por completo con una alerta en caso de arrepentirse
vaciarCarrito.addEventListener('click', () => {
    const carrito = getCarritoStorage()

    const alertFire1 = () => {
        Swal.fire({
            title: 'Estas seguro de querer eliminar todos los productos de tu carrito?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'cancelar',
            confirmButtonText: 'Si, estoy seguro'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Productos eliminados!',
                    'Se han removido todos los productos de tu carrito',
                    'success'
                )
                vaciar(carrito)
            }
        })
    }
    const alertFire2 = () => {
        Swal.fire({
            title: 'No hay productos en tu carrito',
            text: "",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
        })
    }
    carrito.length >= 1 ? alertFire1() : alertFire2()
})

// evento que captura un valor para ser eliminado del carrito
modalCarrito.addEventListener('click', (e) => {
        e.stopPropagation()

        if (e.target.classList.contains('eliminar')) {
            eliminarProductoCarrito(e.target.value)
        }
    })
    // evento para finalizar la compra verificando si el carrito esta vacio ejecuta la funcion "contenidoCarritoValido" de lo contrario alerta que el carrito no tiene productos
checkout.addEventListener('click', () => {
        const carrito = getCarritoStorage()
        const alertFire = () => {
            Swal.fire({
                title: 'No hay productos en tu carrito',
                text: "",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            })
        }

        carrito.length > 0 ? contenidoCarritoValido() : alertFire()
    })
    // funcion que muestra y oculta los contenidos correspondientes para finalizar la compra
const contenidoCarritoValido = () => {
    const pantallaCheckOut = document.getElementById('pantalla-checkout')
    pantallaCheckOut.classList.remove('hidden')
    const cardsContainer = document.getElementById('products-display')
    cardsContainer.classList.add('hidden')
    modalContainer.classList.add('hidden')
    abrirCarrito.classList.add('hidden')
}