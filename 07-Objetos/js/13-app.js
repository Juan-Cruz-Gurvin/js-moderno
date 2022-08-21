const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 33000 ,
    disponible: true,
}
// Retorna las llaves del objeto (parte de la izquierda)
console.log(Object.keys(producto));

// Retorna los valores del objeto (parte de la derecha)
console.log(Object.values(producto));

// Retorna todo
console.log(Object.entries(producto));