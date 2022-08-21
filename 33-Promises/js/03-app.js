// Vamos a definir un promise
const aplicarDescuento = new Promise( (resolve, reject) => { // Puede ser arrow function...

    const descuento = false;

    if(descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
})

aplicarDescuento
    .then( resultado => {
        console.log(resultado);
    } )
    .catch( error => {
        console.log(error);
    } )



// Hay 3 valores posibles...
// fulfilled - El promise se cumplió
// reject - El promise NO se cumplió
// pending - No se ha cumplido y tampoco fue rechazado
