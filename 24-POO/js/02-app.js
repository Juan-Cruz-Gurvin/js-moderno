// Class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }
}

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo); // Funcion super para revisar clase padre y busca los atributos que le pases a super
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { // reescribir un método
        return `Bienvenido al cajero de empresas`
    }
}


const juan = new Cliente('Juan', 400);
const empresa = new Empresa('Codigo con Juan', 10000, 3755587296, 'Aprendizaje en Línea');
console.log(empresa);
console.log(empresa.mostrarInformacion())

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());