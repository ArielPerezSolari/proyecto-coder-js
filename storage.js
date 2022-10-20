const guardarCarritoStorage = (carrito) => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

const getCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
}

const setCuentaStorage = (cuenta) => {
    localStorage.setItem('cuenta', JSON.stringify(cuenta));
}

const getCuentaStorage = () => {
    const cuentaStorage = JSON.parse(localStorage.getItem('cuenta'));
    return cuentaStorage
}


export { guardarCarritoStorage, getCarritoStorage, setCuentaStorage, getCuentaStorage }