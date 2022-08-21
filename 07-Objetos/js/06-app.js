const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 33000,
    disponible: true,
    informacion : {
        caracteristicas : {
            resolucion: '1080x1920px',
            relacionAspecto: '16:9',    
        },
        fabricacion: {
            marca: 'Samsung',
            fabricado: 'Tierra del Fuego'
        }  
    }
}


const { nombre, informacion: {fabricacion}} = producto;

console.log(nombre);
console.log(fabricacion);