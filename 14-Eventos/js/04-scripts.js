
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);


function validarFormulario(evento) {

    evento.preventDefault(); // previene accion por defecto

    console.log('consultar una api')

    console.log(evento.target.action);
};