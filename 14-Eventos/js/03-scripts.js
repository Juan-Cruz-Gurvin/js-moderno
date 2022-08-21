
const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (evento) => {
    if(evento.target.value === '') {
        console.log('fallo la validación')
    }
})

// keyup = cuando sueltas la tecla
// keydown = presionas una tecla
// blur = click fuera del input
// paste
// copy
// cut
// input = cuando realizas un evento

busqueda.addEventListener('input', (evento) => {
    console.log(evento.target);
})

// evento.target.value = muestra lo que el usuario escribe