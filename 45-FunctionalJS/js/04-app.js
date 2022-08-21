const carrito = [
    {nombre: 'Mouse ASUS P513 rog', precio: 16750},
    {nombre: 'Mouse ASUS ROG Gladius', precio: 16550},
    {nombre: 'Mouse Logitech G PRO', precio: 16250},
    {nombre: 'Mouse ASUS ROG Pugio', precio: 15600},
    {nombre: 'Mouse ASUS ROG Strix Gladius III', precio: 15200},
    {nombre: 'Mouse ASUS P511 ROG CHAKRAM Core ', precio: 13300},
    {nombre: 'Mouse ASUS P506 ROG Strix Impact II', precio: 8500},
    {nombre: 'Mouse ASUS ROG Gladius II Core', precio: 8100},
    {nombre: 'Mouse ASUS ROG STRIX Evolve', precio: 7380},
];

const obtenerNombres = producto => {
    return producto.nombre;
}

const resultado = carrito.map(obtenerNombres);
console.log(resultado);