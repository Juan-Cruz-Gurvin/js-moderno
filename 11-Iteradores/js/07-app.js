// for of itera sobre arreglos
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 22000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
]

for( let pendiente of pendientes ) {
    console.log(pendiente);
}

for(let producto of carrito) {
    console.log(producto.nombre)
}