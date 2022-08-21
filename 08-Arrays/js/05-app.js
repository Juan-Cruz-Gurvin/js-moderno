const meses = ['Enero', 'Febrero', 'Marzo'];

// Agregar al final del arreglo sin conocer en que posicion se encuentra (forma imperativa)
meses.push('Abril');
meses.push('Mayo');
meses.push('Junio');
meses.push('Julio');
meses.push('Agosto');
meses.push('Septiembre');
meses.push('Octubre');
meses.push('Noviembre');
meses.push('Diciembre');
console.log(meses);


// Iniciando como arreglo vacio
const carrito = [];

//Definir un producto
const producto = {
    nombre: "S20",
    precio: 100000,
}

const producto2 = {
    nombre: "S21",
    precio: 130000,
}

const producto3 = {
    nombre: "iphone11",
    precio: 178000,
}

const producto4 = {
    nombre: "iphone13",
    precio: 265000,
}

// .push agrega al final de un arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);

// .unshift agrega al inicio de un arreglo (forma imperativa)
carrito.unshift(producto4);

console.table(carrito);