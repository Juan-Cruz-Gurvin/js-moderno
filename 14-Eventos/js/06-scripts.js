// Event Bubbling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', evento => {
   evento.stopPropagation() // detiene la propagacion del evento
    console.log('click en card');
});

infoDiv.addEventListener('click', evento => {
    evento.stopPropagation()
    console.log('click en info');
});

tituloDiv.addEventListener('click', evento => {
    evento.stopPropagation()
    console.log('click en titulo');
});