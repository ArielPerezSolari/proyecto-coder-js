import { guardarCarritoStorage } from "../../storage.js"


// actualiza el total de la compra del carrito 
const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    const totalCompra = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)



    renderTotalesCarrito(totalCantidad, totalCompra)
    guardarCarritoStorage(carrito)

}

// funcion que renderiza el total actualizado 
const renderTotalesCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contador');
    const precioTotal = document.getElementById('total-cart');
    contadorCarrito.innerText = totalCantidad;
    precioTotal.innerText = Number(totalCompra);
    console.log(totalCompra)
}

export { actualizarTotalesCarrito, renderTotalesCarrito }