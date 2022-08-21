
localStorage.setItem('nombre','juan');

const producto = {
    nombre: 'Monitor gigabyte 24 pulgadas 144hz',
    precio: 55000
}

const productoString = JSON.stringify(producto); // (JSON.stringify) Convierte objeto a string
localStorage.setItem('producto', productoString);


// Arreglos
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

localStorage.setItem('meses', JSON.stringify(meses));