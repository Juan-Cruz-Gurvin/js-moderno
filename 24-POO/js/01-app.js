// Las Classes en JavaScript llegaron hasta hace pocos años, muchas personas no consideraban a javascript como un lenguaje serio ya que la programación orientada a objetos era el object constructor y los métodos eran los prototypes...


// Así que en 2015 llegaron las classes a javascript, que solo es una mejora en la sintaxis, al final sigue siendo un object constructor con sus prototypes..

// En realidad sigue siendo lo mismo, pero la facilidad de crear objetos y añadirle métodos si mejoro bastante gracias a las classes


// Las classes se crean con la palabra reservada class...


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

//Si recuerdas previamente instanciabamos nuestro objecto con... para pasar esos valores las classes introducieron lo que se conoce como constructores... en algunos lenguajes el constructor es el mismo nombre de la clase pero en javascript es constructor

const juan = new Cliente('Juan', 400);
console.log(juan.mostrarInformacion());
console.log(juan)

console.log(Cliente.bienvenida());



// Existe una segunda forma de crear classes
// Class expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
}

const felipe = new Cliente('Felipe', 1000);
console.log(felipe.mostrarInformacion());
console.log(felipe);