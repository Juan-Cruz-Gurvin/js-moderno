// Spread operator
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// spread operator con arreglo de indices
const meses2 = [...meses, 'Julio', 'Agosto'];
console.log(meses2);

const meses3 = [...meses2, 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
console.log(meses3);


// spread operator con arreglo de objetos
const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 22000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
]

const producto = { nombre: 'Ryzen 7 5800', precio: 45000 };
const carrito2 = [...carrito, producto];

console.log(carrito2);