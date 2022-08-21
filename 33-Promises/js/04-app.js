// callback hell to promise...
const paises = [];

const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`)
    }, 3000);
}) 


nuevoPais('Argentina')
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Brasil');
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Uruguay');
    })
    .then( resultado => {
        console.log(resultado);
    })