// Array Method every (todos los elementos del arreglo debe cumplir esa condicion para ser true)
const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 15000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
];

const resultado = carrito.every(producto => producto.precio < 40000);
console.log(resultado);