// Cambiar CSS de un elemento
const encabezado = document.querySelector('h1');
console.log(encabezado.style);

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';


const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase'); // se agrego clases al html
card.classList.remove('card'); // se eliminó clase 'card' al html
console.log(card.classList);