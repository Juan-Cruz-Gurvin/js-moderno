// Sintaxis mas común (object literal)
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);


// object constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const Juan = new Cliente('Juan', 500);
console.log(Juan);


const Felipe = new Cliente('Felipe', 600);
console.log(Felipe);


