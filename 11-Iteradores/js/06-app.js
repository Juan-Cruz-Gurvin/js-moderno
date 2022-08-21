// forEach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`)
})

const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 22000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
]

carrito.forEach( (producto) => {
    console.log(producto.nombre);
})

const nuevoArreglo = carrito.forEach(producto => producto.nombre);
console.log(nuevoArreglo);

const nuevoArreglo2 = carrito.map((producto) => producto.nombre);
console.log(nuevoArreglo2);