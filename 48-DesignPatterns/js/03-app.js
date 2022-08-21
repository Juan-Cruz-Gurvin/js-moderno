// Singleton

let instancia = null;

class Persona {
    constructor(nombre, email) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const persona = new Persona('Juan', 'correojuan@gmail.com');
console.log(persona);

const persona2 = new Persona('Agustin', 'correoagustin@gmail.com');
console.log(persona2);