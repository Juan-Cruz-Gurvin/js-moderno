const producto = 'Monitor 20 Pulgadas';
console.log(producto);

// .replace para reemplazar
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

// .slice para cortar
console.log(producto.slice(0, 10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

// Alternativa a slice con .substring
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); // corta de 1 a 2 nomas

const usuario = 'Juan';
console.log(usuario.substring(1,2));
console.log(usuario.charAt(0));

