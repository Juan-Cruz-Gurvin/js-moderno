// Scope
// El Scope es el alcance de una variable, es decir, que funciones o bloques de código tendrán acceso o podrán conocer una variable una vez que es creada..

/** GLOBAL SCOPE */
// function mostrarCliente() {
//     const cliente = 'Juan';
//     console.log(cliente);
// }

// function obtenerCliente() {
//     console.log(cliente);
// }

// mostrarCliente();
// obtenerCliente();


/** Si tienes una función que tiene una variable que se llama igual, eso no es problema para JavaScript */
/** Function Scope... */
// const cliente2 = 'Anibal'

// function mostrarCliente2() {
//     const cliente2 = 'Felipe';
//     console.log(cliente2);
// }

// function obtenerCliente2() {
//     console.log(cliente2);
// }

// mostrarCliente2();
// obtenerCliente2();


/** Scope por bloque... */

const login = true;

function clienteLogueado() {

    const cliente3 = "Mariela";
    console.log(cliente3);

    if(login) {
        const cliente4 = 'Admin';
        console.log(cliente4);
    }

}
clienteLogueado();