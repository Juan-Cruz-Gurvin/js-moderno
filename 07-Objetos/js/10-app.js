const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 33000 ,
    disponible: true,
}
console.log(producto)

const caracteristicas = {
    resolucion: '1080x1920px',
    relacionAspecto: '16:9',    
}
console.log(caracteristicas)


// Une ambos objetos y los asigna a resultado
const resultado = Object.assign(producto, caracteristicas);
console.log(resultado);

// Otra forma pero realiza lo mismo
//Spread Operator o Rest Operator
const resultado2 = {...producto, ...caracteristicas}
console.log(resultado2);