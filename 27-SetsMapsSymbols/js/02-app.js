// WeakSet (solo objetos)

const weakSet = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100,
}

weakSet.add(cliente);

// comprobar si un valor existe
console.log(weakSet.has(cliente));

// eliminar
// weakSet.delete(cliente);

console.log(weakSet);