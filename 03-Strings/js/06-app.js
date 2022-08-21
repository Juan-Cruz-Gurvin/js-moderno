const producto = 'TV Samsung 55 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto ...

const texto =' en Promoción'.repeat(2);

console.log(`${producto}${texto} !!!`)


// Split, dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" ")); // Dividido por cada una de los espacios que tenemos

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", ")); // Dividido por cada una de las comas que tenemos

const tweet = "#Aprendiendo #JavaScript #JSModernoConJuan";
console.log(tweet.split('#')); // Dividido por el #