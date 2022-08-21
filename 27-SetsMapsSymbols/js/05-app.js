// Symbol

// Los simbolos son nuevos en ES6, te permiten crear propiedad única 

// Symbol es creado y se agrega a una propiedad del objeto.
// new Symbol enviaria un error.

const sym = Symbol('1');
const sym2 = Symbol('1');

if(sym === sym2) {
    console.log('Son iguales')
} else {
    console.log('Son diferentes')
}

// console.log( Symbol() === Symbol());


const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Juan Cruz';
persona[apellido] = 'Gurvin';
// Agregar mas propiedades al objeto de forma normal
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);

// Acceder a propiedad
console.log(persona[nombre]);
console.log(persona.tipoCliente);

// Las propiedades que utilizan un symbol NO son iterables
for(let i in persona) {
    console.log(i);
}

// Definir una descripción del symbol
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);