// 1) El Problema...
// const nombreCliente =  'Juan';
// let ahorro = 200;


// 2) Los IIFE son funciones que se ejecutan inmediatamente que son leidas...(Expresión de función ejecutada inmediatamente)
// Esta forma evitará que estas variables definidas en este archivo se puedan mezclar con las de otros archivos... y su sintaxis es la siguiente...

// (solo en este archivo sirve)
(function() {
    console.log('Desde un IIFE');

    //El problema es que implementar un IIFE, si evita que nuestro código se mezcle con otro, pero el problema que tendriamos es que si queremos tener un código más ordenado y separar en distintos archivos sería imposible hacerlo

    //En este caso la forma de hacerlo seria con...
    window.nombreCliente = 'Juan';
})();


// Para ello son muy útiles los modulos y 2 palabras, export e import...

// export saca una variable o una función
export const nombreCliente = 'Juan'; // Esto nos va a marcar un error, nos dirá que los exports solo funcionan en modules...

// Para que el export funcione hay que abrir el index.js y declararlo con type="module"
export const ahorro = 100;


// 3 ) 
// Exportar funciones
// También puedes exportar e importar funciones...
export function mostrarInformacion(nombreCliente, ahorro) {
    return `Cliente: ${nombreCliente} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if( ahorro === 0 ) {
        console.log(`El cliente ${nombreCliente} no tiene saldo`)
    } else if( ahorro <= 25 ) {
        console.log('Le queda poco saldo')
    } else {
        console.log('Si tiene saldo')
    }
}


// 4)
// Exportar una clase
export class Cliente {
    constructor(nombreCliente, ahorro) {
        this.nombreCliente = nombreCliente;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombreCliente} - Ahorro: ${this.ahorro}`
    }
}


// 6)  EXPORT DEFAULT

// Cada archivo puede tener múltiples exports, pero solo un export default, este export default puede tener un nombre o no...

export default function nuevaFuncion() {
    console.log('Este es el export default');
}