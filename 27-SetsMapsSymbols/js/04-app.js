// Weakmap (solo acepta objetos)
const producto = {
    idProducto : 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');
console.log(weakmap);

// Comprobar si existe este objeto
console.log(weakmap.has(producto));
// Extraer informacion del weakmap
console.log(weakmap.get(producto));

console.log(weakmap.size); //no puedes saber la extension de un weakmap
console.log(weakmap.delete(producto));

console.log(weakmap);