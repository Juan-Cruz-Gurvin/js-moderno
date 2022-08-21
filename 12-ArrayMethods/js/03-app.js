
const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 15000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
]

// con un forEach
let total = 0;
carrito.forEach(producto => total += producto.precio);
console.log(total);


// con un reduce
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);