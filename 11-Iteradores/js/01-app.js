// algunas veces vas a desear ejecutar tu código hasta que una condición se cumpla o se deje de cumplir...

// los For Loops tienen esa caracteristica, se ejecutan hasta que el código deja de cumplir esa condición...
// For loop

    // inicia en 0 // ejecuta hasta 10 // incremento
for( let i = 0; i <= 10; i++ ) {
    console.log(`Numero: ${i} `);
} 

// Podemos llevar este ejemplo más allá una pregunta sencilla para programadores JR es como identificas un numero par o impar en un for loop...
for(let i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        console.log(`Numero ${i} ES PAR `);
    } else {
        console.log(`Numero ${i} ES IMPAR `);
    }
}
    

for( let i = 0; i <= 20; i++ ) {
    if( i % 2 === 0) {
        console.log(`El numero ${i} es PAR`);
    }
    else {
        console.log(`El numero ${i} es IMPAR`)
    }
}



const carrito = [
    { nombre: 'Ryzen 5 1600af', precio: 22000},
    { nombre: 'Ryzen 5 2600', precio: 25000},
    { nombre: 'Ryzen 5 3600', precio: 28000},
    { nombre: 'Ryzen 5 5600', precio: 30000},
    { nombre: 'Ryzen 5 5600x', precio: 38000},
]
console.log(carrito.length); // Cuantos elementos hay en el arreglo

// Ejecuta las veces que haya elementos en el carrito
for( let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}

// en este caso nuestro for loop corre hasta que una condición se cumple, ahora como este arreglo el usuario se va a encargar de llenarlo, que el carrito tenga elementos, un for loop ejecutará el código hasta que lleguemos al final del carrito...