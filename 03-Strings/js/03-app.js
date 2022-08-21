const producto = 'Monitor Samsung 22 Pulgadas';
const precio = ' 140 USD';

// Para concatenar o unir las dos cadenas
console.log(producto.concat(precio));

// Tambien se puede concatenar strings
console.log(producto.concat(' en descuento!'));


// Concatenar de maneras mas dinámicas
const producto2 = 'TV Samsung led 55"'
const precio2 = 80000
console.log( producto2 + " con un precio de $ARS: " + precio2);

console.log("El producto: " + producto2 + " tiene un precio de $ARS: " + precio2);
console.log("El producto: " , producto2 , "tiene un precio de $ARS:" , precio2);


// Otra forma de concatenar
const producto3 = 'Teclado TKl redragon';
const precio3 = 5000;
console.log(`El producto ${producto3} tiene un precio de ${precio3} ARS`);