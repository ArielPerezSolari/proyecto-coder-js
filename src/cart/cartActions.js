import { actualizarTotalesCarrito } from '../cart/cartUpdate.js'
import { getCarritoStorage } from '../../storage.js'
import { getStock } from '../products/getStock.js'

// array vacio referencia al carrito listo para iterar
let carrito = []


// funcion que valida si el producto se encuentra repetido en el carrito para no crear otro contenedor sino sumar en 1 la cantidad del producto
const validarProductoRepetido = (productoId) => {

    localStorage.getItem('carrito') ? carrito = getCarritoStorage() : console.log('carrito storage not found')

    const productoRepetido = carrito.find(producto => producto.id === productoId)


    if (productoRepetido) {
        productoRepetido.cantidad++
            const cantidadProducto = document.getElementById(`quantity${productoRepetido.id}`)
        cantidadProducto.innerText = `Cantidad: ${productoRepetido.cantidad}`
        actualizarTotalesCarrito(carrito)
    } else {
        agregarAlCarrito(productoId)
    }
}

// funcion que agrega un producto al carrito creando un elemento que renderiza parte de la informacion del producto
const agregarAlCarrito = async(productoId) => {
    const contenedorCarrito = document.getElementById('cart-container')
    const productos = await getStock()
    const producto = productos.find(producto => producto.id === productoId)

    carrito.push(producto)

    const div = document.createElement('div');
    div.innerHTML += ` <div class="product-added">
                            <p>Producto: ${producto.modelo} </p>
                            <p>Precio: $${producto.precio} </p>
                            <p id="quantity${producto.id}">Cantidad: ${producto.cantidad}</p>
                            <button class="eliminar" id="erase${producto.id}" value="${producto.id}">X</button>
                        </div>`

    contenedorCarrito.appendChild(div)
    actualizarTotalesCarrito(carrito)
    Toastify({
        text: "Se agrego un producto al carrito",
        offset: {
            x: 50,
            y: 50
        },
    }).showToast();

}


// funcion que pinta en el carrito los elementos dentro del array carrito
const pintarCarrito = (carrito) => {
    const contenedorCarrito = document.getElementById('cart-container')

    contenedorCarrito.innerHTML = ""

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.innerHTML += ` <div class="product-added">
                                <p>Producto: ${producto.modelo} </p>
                                <p>Precio: $${producto.precio} </p>
                                <p id="quantity${producto.id}">Cantidad: ${producto.cantidad}</p>
                                <button class="eliminar" id="erase${producto.id}" value="${producto.id}">X</button>
                            </div>`

        contenedorCarrito.appendChild(div)
    });

}

// funcion que vacia el array hasta que su longitud deje de ser mayor a 0 tambien actualiza los valores del carrito
const vaciar = (carrito) => {

    while (carrito.length > 0) {
        carrito.pop()
    }

    actualizarTotalesCarrito(carrito)
    pintarCarrito(carrito)
}




// funcion que elimina el producto objetivo del carrito 
const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = getCarritoStorage()
    Swal.fire({
        title: 'Estas seguro de querer eliminar este producto de tu carrito?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, me arrepentí'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado',
                'Se ha removido el producto de tu carrito',
                'success'
            )
            actualizarTotalesCarrito(carritoActualizado)
            pintarCarrito(carritoActualizado)
        }
    })
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId)


}

export { validarProductoRepetido, agregarAlCarrito, pintarCarrito, eliminarProductoCarrito, vaciar }