// Listado de paises
const paises = [];

// Un nuevo pais se agrega despues de 2 segundos...
function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}


function mostrarPaises() {
    console.log(paises);
}

// Los paises se muestran despues de 1 segundo
function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Colombia', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Argentina', mostrarPaises);  
            setTimeout(() => {
                nuevoPais('Brasil', mostrarPaises); 
            }, 1000);
        }, 1000);
    }, 1000);
}

iniciarCallbackHell();

// mostrarPaises es el callback, una vez agregado Colombia se va a ejecutar esa linea...