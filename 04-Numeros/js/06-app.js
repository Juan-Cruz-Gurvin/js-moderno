// Convertir string a número

const numero1 = "20";
console.log(Number.parseInt(numero1)); //parseInt Convierte a entero

const numero2 = "20.5";
console.log(Number.parseFloat(numero2)); //parseFloat Convierte a flotante

const numero3 = "Uno";
console.log(Number.parseInt(numero3)); // retorna NaN ( Not-A-Number)

//Revisar si un número es entero o no
const numero4 = 20.2;
console.log(Number.isInteger(numero4));

// Ver si es string o number
const numero5 = 10;
console.log(typeof numero5)

const numero6 = "10";
console.log(typeof numero6)