const carrito = [];

//Definir un producto
const producto1 = {
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

// .push agrega al final de un arreglo
carrito.push(producto1);
carrito.push(producto2);
carrito.push(producto3);

// .unshift agrega al inicio de un arreglo
carrito.unshift(producto4);
console.table(carrito);



// Eliminar último elemento del arreglo
carrito.pop();
console.table(carrito);

// Eliminar del inicio del arreglo
carrito.shift();
console.table(carrito);

// Eliminar el elemento que queramos
carrito.splice(1,1); // (primer num: posicion; segundo num: cuantos elementos quiero eliminar)
console.table(carrito);