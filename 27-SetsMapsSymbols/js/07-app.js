// generador (es una funcion que retorna un iterador)
// Se indican con un asterisco después de  la palabra function

// Generador
function *crearGenerador() {
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador);


// generador para carrito de compras
function *generadorCarrito(carrito) {
    for(let i=0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto1','Producto2','Producto3'];

const iterador2 = generadorCarrito(carrito);

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());