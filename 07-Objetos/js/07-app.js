const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 33000 ,
    disponible: true,
}

// Si se pueden reescribir
producto.disponible = false;

// Para eliminar una propidad
delete producto.precio;

console.log(producto);