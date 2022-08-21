const producto = '            Monitor 20 Pulgadas              ';
console.log(producto);
console.log(producto.length);


// Eliminar del inicio ...
console.log( producto.trimStart() );
console.log(producto.trimStart().length);

// Eliminar del final ...
console.log( producto.trimEnd() );
console.log(producto.trimEnd().length);


// Eliminar de ambos espacios ... (inicio y final)
console.log( producto.trimStart().trimEnd() );
console.log(producto.trimStart().trimEnd().length);

// Otra forma de eliminar de ambos espacios ... (inicio y final)
console.log( producto.trim() );
// console.log(producto.trim().length);