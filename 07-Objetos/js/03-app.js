const producto = {
      nombre: "Monitor Samsung 24 pulgadas",
      precio: 33000 ,
      disponible: true,
}

//Agregar nuevas propiedades al objeto
producto.imagen = "imagen.jpg";

//Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);