const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 33000,
    disponible: true,
    marca: "Samsung",
}

// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring en objetos
const { nombre, precio, disponible, marca } = producto;
console.log(nombre);
console.log(marca);

//Destructuring en Arreglos
const numeros = [1,2,3,4,5];

const [primero, segundo, tercero, cuarto, quinto] = numeros;
console.log(cuarto);