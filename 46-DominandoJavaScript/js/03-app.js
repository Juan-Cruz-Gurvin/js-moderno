// Coercion

// La Coercion es un tema interesante en JavaScript, es la conversión automática o implicita de valores de un tipo de dato a otro

// Si tienes un Número y un String y quieres sumarlos:

const numero1 = 20;
const numero2 = "40";

console.log(numero1 + numero2); // IMPLICITA

// También puedes convertir un string a número...
const numero3 = "20";

console.log(Number(numero3)); // EXPLICITA


// O un número a string...
const numero4 = 20;
console.log(numero4.toString() );


// Un arreglo o un objeto se puede modificar a String...
const pedido = [1,2,3,4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido)); // convierte un objeto o valor de JavaScript en una cadena de texto JSON
