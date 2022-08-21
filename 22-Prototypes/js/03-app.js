
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// funcion para tipo de cliente
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

// funcion para ver saldo de cliente
Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira; // al saldo se le resta lo retirado
}

// Instanciarlo
const juan = new Cliente('Juan', 6000);

console.log(juan.tipoCliente());

console.log(juan.nombreClienteSaldo());

juan.retiraSaldo(1500);

console.log(juan.nombreClienteSaldo());

console.log(juan);