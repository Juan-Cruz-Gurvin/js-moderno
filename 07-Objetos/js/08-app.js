// Para que no pueda ser modificado se habilita el modo estricto
"use strict";

const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 33000 ,
    disponible: true,
}

//Sirve para congelar un objeto y no deja hacer cambios
Object.freeze( producto );

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);

// Para saber si un objeto esta congelado o no
console.log(Object.isFrozen(producto));

