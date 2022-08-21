// implicing bindings.

// Implicit binding le dira de forma clara a la palabra this donde encontrar sus valores
const usuario = {
    nombre: 'Juan Cruz',
    edad: 22,
    informacion() {
        console.log(`Mi Nombre es ${this.nombre} y mi edad es ${this.edad}`);
    }, 
    mascota: {
        nombre: 'Felipe',
        edad: 6, 
        informacion() {
            console.log(`Su nombre es ${this.nombre} y tiene ${this.edad} años`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();