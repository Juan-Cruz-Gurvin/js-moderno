// (forma declarativa)
const carrito = [];

//Definir un producto
const producto = {
    nombre: "S20",
    precio: 100000
}

const producto2 = {
    nombre: "S21",
    precio: 130000
}

const producto3 = {
    nombre: "iphone11",
    precio: 178000
}

const producto4 = {
    nombre: "iphone13",
    precio: 265000
}

let resultado;

resultado = [...carrito, producto];
console.table(resultado);

resultado = [...resultado, producto2];
console.table(resultado);

resultado = [producto3, ...resultado];
console.table(resultado);

resultado = [producto4, ...resultado];
console.table(resultado);
