const producto = {
      nombre: "Monitor 24 pulgadas",
      precio: 33000,
      disponible: true,
      marca: "Samsung",
}

// Forma anterior de hacerla
// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring (sacar de una estructura)
const { nombre, precio, disponible, marca } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(marca);
