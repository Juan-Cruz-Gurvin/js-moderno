// self se refiere a la ventana global, 

self.onload = () => {
    console.log('Ventana Lista');
}

window.onload = () => {
    console.log('Ventana lista');
}


// Ahora muchas personas utilizan self de la sig forma...

const producto = {
    nombre: "Smart 50 pulgadas",
    precio: 80000,
    disponible: true,
    mostrarInfo: function() {
        const self = this;
        return `El Producto: ${self.nombre} tiene un precio de ${self.precio}`;
    }
}

console.log(producto.mostrarInfo());