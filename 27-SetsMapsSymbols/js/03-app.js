// MAPS
// Listas ordenadas en llave - valor, donde el tipo y el valor pueden ser cualquier tipo, a diferencia de un objeto puede tener la llave de cualquier tipo de dato...

// y en cuanto a performance los maps tienen mejor performance que los objetos, son especialmente diseñados para agregar o quitar elementos así como recorrer, también cuando son muy grandes tienen mejor performance que un objeto

const cliente = new Map();

// agregar elementos a map (llave y valor)
cliente.set('nombre', 'Felipe');
cliente.set('tipo', 'premium');
cliente.set('saldo', 3000);

console.log(cliente);

// Métodos al MAP
// Tamaño del MAP
console.log(cliente.size);
// Comprobar si contiene un valor
console.log(cliente.has('nombre'));
console.log(cliente.has('Felipe'));
// Borrar
cliente.delete('saldo');
// Obtener valor
console.log(cliente.get('tipo'));

console.log(cliente);

// Borrar el map
cliente.clear();
console.log(cliente);



// También se puede inicializar un map con diferentes valores...
const cliente2 = new Map ([['Nombre','cliente'],['telefono', 'no definido']]);
console.log(cliente2);

cliente2.set('dni', '42715865');
cliente2.set('Nombre', 'Juan');
cliente2.set('direccion', 'barrio docente casa 47')

console.log(cliente2);

// iterar map
cliente2.forEach( (datos, index) => {
    console.log(index);
    console.log(datos);
})