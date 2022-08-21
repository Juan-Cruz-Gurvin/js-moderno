// Crear un arreglo que es un objeto
const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 22000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
]

// For loop
for(let i = 0; i < carrito.length; i++ ) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// Metodo para iterar un arreglo
carrito.forEach (function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})
