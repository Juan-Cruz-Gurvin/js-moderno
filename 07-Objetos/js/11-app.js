const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 33000 ,
    disponible: true,
    mostrarInfo: function() {
                                // This busca propiedad dentro del objeto
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}
producto.mostrarInfo();

const producto2 = {
    nombre: "Televisor 40 pulgadas",
    precio: 50000 ,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}
producto2.mostrarInfo();