// Array Method filter (crea un nuevo arreglo basado en el parametro que es evaluado)
const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 15000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
];

let resultado; 

resultado = carrito.filter(producto => producto.precio > 25000);
console.log(resultado);

resultado = carrito.filter(producto => producto.precio < 28000);
console.log(resultado);


resultado = carrito.filter(producto => producto.nombre !== 'Ryzen 5 1600af'); //Saca sola ese producto
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre === 'Ryzen 5 1600af'); //Agrega solo ese producto
console.log(resultado);
