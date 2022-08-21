
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}




function Persona(nombre, saldo, telefono, dni) {
    Cliente.call(this, nombre, saldo); // metodo .call hereda de la clase cliente
    this.telefono = telefono;
    this.dni = dni;
}

Persona.prototype = Object.create(Cliente.prototype); // pasar prototype de cliente a prototype de persona

Persona.prototype.constructor = Cliente;

// Instanciarlo
const juan = new Persona('Juan', 5000, 3755587296, 42715865);
console.log(juan);
console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
    return `El teléfono de esta persona es ${this.telefono}`
}
console.log(juan.mostrarTelefono());

Persona.prototype.mostrarDni = function() {
    return `El DNI de esta persona es ${this.dni}`
}
console.log(juan.mostrarDni());