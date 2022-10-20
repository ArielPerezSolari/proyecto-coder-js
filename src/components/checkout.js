import { getCarritoStorage } from "../../storage.js"
import { vaciar } from "../cart/cartActions.js"

const pantallaCheckOut = document.getElementById('pantalla-checkout')
const email = document.getElementById('email')
const formCheckout = document.getElementById('form-checkout')


formCheckout.addEventListener('submit', (e) => {
    e.preventDefault()
    let mail = email.value

    pantallaCheckOut.innerHTML = `<h2>Gracias por tu compra!</h2>
                                    <p>Te enviamos un mail a la siguiente direccion : ${mail} <br>
                                        En el mail te dejamos todas las instrucciones para recibir tu compra! GRACIAS! 😁</p>`

    const carrito = getCarritoStorage()
    vaciar(carrito)

})