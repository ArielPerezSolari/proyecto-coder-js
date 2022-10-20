import { mostrarProductos } from "./App.js"
import { pintarCarrito } from "./src/cart/cartActions.js"
import { actualizarTotalesCarrito } from "./src/cart/cartUpdate.js"
import { mostrarNombreUsuario, saludoBienvenida } from "./src/register/registro.js"
import { getCarritoStorage, getCuentaStorage } from "./storage.js"
import { cuenta } from "./src/register/registro.js"

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos()

    if (localStorage.getItem('carrito')) {
        const carrito = getCarritoStorage()
        pintarCarrito(carrito)
        actualizarTotalesCarrito(carrito)
    }
    if (localStorage.getItem('cuenta')) {
        const cuenta = getCuentaStorage()
        saludoBienvenida(cuenta)

    }
})