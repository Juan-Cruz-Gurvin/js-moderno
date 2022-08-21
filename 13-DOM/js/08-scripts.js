const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
// Cada elemento en la navegación se les conoce como Nodos... y podrás listarlos de la siguiente forma...
console.log(navegacion.childNodes); //childNodes te va a mostrar hasta los espacios en blanco que son considerados elementos
console.log(navegacion.children); // Children te muestra solo los elementos


// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);


const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';

console.log(card.children[1].children[1].textContent);



card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[0]);


// Traversing the Hijo al padre
console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);


console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);