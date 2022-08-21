// Constructor Pattern

class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('Anibal', 'correoAnibal@gmail.com');
console.log(persona);

const cliente = new Cliente('Juan Cruz', 'correoJuanCruz@gmail.com', 'Codigo con JCG');
console.log(cliente);