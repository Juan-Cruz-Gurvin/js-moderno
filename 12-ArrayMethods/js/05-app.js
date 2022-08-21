// Array Method find (crea un nuevo arreglo basado en la condicion que estas revisando)
const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 15000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
];

// con un forEach
let resultado = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Ryzen 5 2600') {
        resultado = carrito[index]
    }
});

console.log(resultado);


// con find
const resultado2 = carrito.find(producto => producto.nombre == 'Ryzen 5 2600');
console.log(resultado2);