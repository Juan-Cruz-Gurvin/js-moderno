
"use strict";

const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 33000 ,
    disponible: true,
}

//No se puede agregar ni eliminar propiedades pero si se pueden modificar las existentes
Object.seal( producto );

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

// Para saber si un objeto esta sellado o no
console.log(Object.isSealed(producto));