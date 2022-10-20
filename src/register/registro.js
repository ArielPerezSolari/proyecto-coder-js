import { mostrarProductos } from "../../App.js"
import { getCuentaStorage, setCuentaStorage } from "../../storage.js"


const pantallaRegistro = document.getElementById('pantalla-registro')
const formRegistro = document.getElementById('form-registro')
const contenedorRegistro = document.getElementById('contenedor-registro')
let usuarioRegistro = document.getElementById('usuario-registro')
let passwordRegistro = document.getElementById('contraseña-registro')

///array vacio en el que se van a pushear los elementos

const cuenta = []

// formulario de registro

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()
    let usuario = usuarioRegistro.value
    let password = passwordRegistro.value

    usuarioRegistro ? cuenta.push(usuario) : console.log('false')
    passwordRegistro ? cuenta.push(password) : console.log('false')

    saludoBienvenida(cuenta)
    setCuentaStorage(cuenta)
    Swal.fire('Registro Exitoso!')
    return persona

})

// funcion que genera un saludo en pantalla y un boton para ver los productos

const saludoBienvenida = (cuenta) => {
    const div = document.createElement('div')
    div.classList.add('saludo')
    div.innerHTML = `<h2>Bienvenido ${cuenta[0]} a Guitar Shop!</h2>
                        <h3> continua para ver nuestros productos</h3>
                        <button id="btnContinuar">continuar</button>                
    `
    pantallaRegistro.innerHTML = ''
    pantallaRegistro.append(div)



    const verProductos = document.getElementById(`btnContinuar`)
    verProductos.addEventListener('click', () => {
        pantallaRegistro.classList.add('display-none')
        const cardsContainer = document.querySelector('.cards-container')
        const btnCarrito = document.querySelector('.carrito')
        cardsContainer.classList.remove('display-none')
        btnCarrito.classList.remove('hidden')

    })
    mostrarNombreUsuario(cuenta)
}

// funcion que muestra el nombre del usuario en el header

const mostrarNombreUsuario = (cuenta) => {
    const nombreEnPantalla = document.querySelector('.usuario')
    nombreEnPantalla.classList.remove('hidden')
    nombreEnPantalla.innerText = cuenta[0]
}



export { cuenta, saludoBienvenida, mostrarNombreUsuario }