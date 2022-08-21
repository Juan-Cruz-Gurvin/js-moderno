const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
// 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'

// Comprobar si un valor existe en un arreglo
meses.forEach(mes => {
    if(mes === 'Febrero') {
        console.log(`${mes} si existe`)
    }
});

// .includes revisa si un valor existe en un arreglo (funciona en arreglos solo con un indice)
const resultado = meses.includes('Diciembre');
console.log(resultado);



const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 22000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
]

// En un arreglo de objetos se utiliza .some
const existe = carrito.some(producto => producto.nombre === 'Ryzen 5 5600x');
console.log(existe);

// En un arreglo tradicional con .some
const existe2 = meses.some(mes => mes === 'Diciembre');
console.log(existe2);