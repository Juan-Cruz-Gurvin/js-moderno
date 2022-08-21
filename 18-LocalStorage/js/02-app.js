// obtener datos de localstorage con getItem (trae el objeto)
const nombre = localStorage.getItem('nombre');
console.log(nombre);


const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON)); // ((JSON.parse) Convertir string a objeto


const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray);