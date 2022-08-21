const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 15000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
]

meses.forEach((mes, index) => {
    // console.log(index)
    // console.log(mes)
})

meses.forEach((mes, i) => {
    if(mes === 'Abril') {
        console.log(`${mes} se encuentra en el indice ${i}`)   
    } 
})


// Encontrar el indice de Abril
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);


// Encontrar el indice de un arreglo de objetos ...
const indice2 = carrito.findIndex(producto => producto.precio === 38000);
console.log(indice2);