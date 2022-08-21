class Cliente {

    #nombre;
    
    // constructor(nombre, saldo) {
    //     this.#nombre = nombre;
    //     this.saldo = saldo;
    // }

    // mostrarInformacion() {
    //     return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    // }

    // static bienvenida() {
    //     return `Bienvenido al cajero`
    // }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

}


const juan = new Cliente();
juan.setNombre('Juan');
console.log(juan.getNombre());