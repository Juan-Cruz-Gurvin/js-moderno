
const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 22000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
]
// .map crea un nuevo arreglo
const nuevoArreglo = carrito.map(function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
} )
console.log(nuevoArreglo);


const nuevoArreglo2 = carrito.forEach(function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}` ;
} )
console.log(nuevoArreglo2);
