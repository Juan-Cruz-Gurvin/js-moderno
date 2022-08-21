// Creando un Set (puede almacenar cualquier tipo de valor mientras que el weakset solo objetos)
// Un set te permite crear una lista de valores sin duplicados.
// Pocas veces los veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados, pero sería más sencillo con un set... de hecho en algunas ocasiones termina siendo mejor opción que un arreglo o un objeto...

const carrito = new Set();

// Agregar elementos al set
carrito.add('camisa');
carrito.add('remera');
carrito.add('zapatilla');
carrito.add('short');

console.log(carrito);

// ver cantidad elementos
console.log(carrito.size);

// comprobar si un valor existe
console.log(carrito.has('camisa'));

// eliminar un elemento
carrito.delete('short')

// eliminar todos los elementos
// carrito.clear();

console.log(carrito);



// iterar set
carrito.forEach( producto => {
    console.log(producto);
})



// Del siguiente arreglo eliminar los duplicados
const numeros = [1,2,3,3,2,1,4,5,6,6,5,4];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);