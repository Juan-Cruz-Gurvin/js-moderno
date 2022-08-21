// Object Literal
const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 33000 ,
    disponible: true,
}


//Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true; // Por default es true
}

const producto2 = new Producto('Monitor 26 pulgadas', 40000);
console.log(producto2);

const producto3 = new Producto('Television 50 pulgadas', 70000);
console.log(producto3);